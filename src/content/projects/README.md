# Cadastro de projetos

Cada projeto deve ser salvo como um arquivo `*.project.md` nesta pasta. O Vite carrega esses arquivos durante a compilação; não há backend.

O arquivo começa com um bloco delimitado por `---` cujo conteúdo é JSON válido. Os campos `order`, `status`, `title`, `summary`, `description` e `technologies` são obrigatórios. `title`, `summary` e `description` devem conter versões revisadas em português e inglês. O menor valor de `order` aparece primeiro. Todos os projetos, inclusive os de inteligência artificial, aparecem na seção única “Projetos”.

```markdown
---
{
  "order": 1,
  "status": "in-progress",
  "title": {
    "pt-BR": "Título confirmado do projeto",
    "en": "Confirmed project title"
  },
  "summary": {
    "pt-BR": "Resumo curto e confirmado.",
    "en": "Short, confirmed summary."
  },
  "description": {
    "pt-BR": "Descrição fiel do que o projeto realmente faz.",
    "en": "Accurate description of what the project actually does."
  },
  "technologies": ["Tecnologia confirmada"],
  "repository": "https://github.com/usuario/repositorio",
  "demo": "https://exemplo.com",
  "image": "images/projeto.png",
  "imageAlt": {
    "pt-BR": "Descrição da imagem",
    "en": "Image description"
  }
}
---
```

- Use `status: "draft"` para conteúdo incompleto ou não confirmado; rascunhos nunca são exibidos. Use `"in-progress"` para projetos reais em desenvolvimento que o usuário autorizou divulgar; eles aparecem claramente rotulados como em desenvolvimento. Use `"completed"` apenas para projetos confirmados como concluídos e funcionais.
- `repository`, `demo` e `image` são opcionais. Links devem usar HTTP(S); imagens locais devem ficar em `public/` e usar caminho relativo à pasta pública, como `images/projeto.png`.
- `imageAlt` é obrigatório quando `image` estiver definido.
- O nome do arquivo, sem o sufixo `.project.md`, vira a chave do projeto.
- O bloco JSON contém os dados consumidos pela interface. Não cadastre projetos fictícios nem informações, métricas ou links não confirmados.
