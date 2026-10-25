# Arquitetura do Projeto

## 1. Stack

- React
- Vite
- TypeScript
- CSS moderno (CSS Modules ou CSS organizado por componente, mantendo uma abordagem consistente)
- Markdown para cadastro e documentação dos projetos
- GitHub Pages para hospedagem estática

Evitar instalar bibliotecas sem necessidade clara. Preferir soluções simples para animação Matrix, idiomas e renderização dos dados.

## 2. Restrições arquiteturais

- Sem backend, servidor de aplicação ou banco de dados.
- O site deve funcionar como build estático.
- O repositório esperado chama-se `portfolio`.
- A publicação usará o caminho `/portifolio/`, correspondente ao repositório `portifolio`; configurar corretamente `base` no `vite.config.ts`.
- Não assumir o nome de usuário do GitHub. Deixá-lo configurável/pendente até ser fornecido.
- Não usar rotas que dependam de configuração de servidor. Preferir navegação por seções/âncoras, a menos que haja justificativa documentada.
- O conteúdo deve ser facilmente atualizável.

## 3. Estrutura de diretórios sugerida

```text
portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── daniel-profile.png
├── content/
│   └── projects/
│       └── README.md
├── src/
│   ├── components/
│   │   ├── MatrixBackground/
│   │   ├── Header/
│   │   ├── LanguageSelector/
│   │   ├── Hero/
│   │   ├── Section/
│   │   ├── ProjectCard/
│   │   ├── Skills/
│   │   └── Footer/
│   ├── content/
│   │   ├── translations.ts
│   │   ├── profile.ts
│   │   └── skills.ts
│   ├── hooks/
│   ├── styles/
│   │   ├── tokens.css
│   │   └── global.css
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── PROJECT.md
├── DESIGN.md
├── ARCHITECTURE.md
├── AGENTS.md
├── TASKS.md
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

A estrutura é uma referência, não uma obrigação rígida. O agente pode ajustá-la se registrar o motivo e preservar a separação de responsabilidades.

## 4. Conteúdo em Markdown

- Cada projeto deve ter um arquivo `*.project.md` próprio em `src/content/projects/`. O campo inteiro `order` define a posição crescente dos cards.
- O arquivo usa um bloco de front matter JSON entre delimitadores `---`, com ordem, estado (`draft`, `in-progress` ou `completed`), título, resumo e descrição em PT/EN, tecnologias e links/imagem opcionais.
- `src/content/projects.ts` importa os arquivos com `import.meta.glob` e `?raw`, valida o esquema e os consome estaticamente na compilação. Arquivos inválidos causam erro explícito; registros `draft` são ocultos, `in-progress` são exibidos com rótulo de desenvolvimento e `completed` são apresentados como concluídos.
- Todos os projetos cadastrados são exibidos juntos na seção única “Projetos”, independentemente do tipo ou uso de inteligência artificial.
- A instrução de cadastro está em `src/content/projects/README.md`. Manter rascunhos até confirmar o projeto e os dados; exibir como em desenvolvimento somente projetos reais autorizados, sem apresentá-los como concluídos.
- Não adicionar backend nem buscar conteúdo de um serviço remoto.
- Não cadastrar projetos fictícios como se fossem reais.

## 5. Idiomas

- Usar um estado de idioma centralizado, com `pt-BR` como padrão e `en` como idioma alternativo.
- Manter strings da interface em um único módulo de traduções ou estrutura equivalente.
- Não duplicar componentes inteiros por idioma.
- Garantir que o idioma também atualize atributos relevantes como `document.documentElement.lang`.
- Traduzir conteúdo profissional apenas quando a versão em inglês estiver revisada.
- Se um projeto tiver conteúdo em apenas um idioma, fornecer uma tradução verdadeira ou indicar claramente a disponibilidade; nunca gerar detalhes técnicos inventados.

## 6. Animação Matrix

- Encapsular o fundo em componente independente.
- Preferir canvas para a chuva de caracteres.
- Limpar corretamente `requestAnimationFrame`, eventos e recursos no unmount.
- Ajustar tamanho de canvas em redimensionamento.
- Respeitar `prefers-reduced-motion`, visibilidade da página e desempenho móvel.
- A camada de fundo deve usar `pointer-events: none` e não cobrir controles.
- Não bloquear renderização do conteúdo principal.

## 7. GitHub Pages

- Configurar `base: '/portifolio/'` no Vite.
- Usar caminhos de recursos compatíveis com a base.
- Definir scripts claros de desenvolvimento, build e preview.
- Preparar a publicação no GitHub Pages pelo fluxo mais simples compatível com a configuração do repositório e com a interface atual do GitHub.
- Não afirmar que o site foi publicado até que a publicação tenha sido realmente realizada e verificada.
- Documentar os passos manuais para habilitar GitHub Pages e atualizar o site.
- Se for necessário workflow de CI para publicar, justificar e pedir aprovação antes de acrescentar algo fora do plano original.
- O fluxo manual escolhido está descrito em [`DEPLOYMENT.md`](./DEPLOYMENT.md); não há workflow de publicação configurado.

## 8. Links externos e SEO

- GitHub e e-mail devem ser configuráveis e permanecer ocultos ou inativos enquanto estiverem pendentes.
- LinkedIn confirmado: `https://br.linkedin.com/in/danielpelaquim`.
- Configurar title, description, idioma, viewport, theme color e Open Graph.
- Evitar inventar URLs de imagem social, domínio personalizado ou favicon de marca final.
- Garantir links externos seguros.

## 9. Qualidade e manutenção

- TypeScript estrito sempre que viável.
- Componentes pequenos e reutilizáveis, sem abstrações excessivas.
- Evitar duplicação.
- Tratar estados vazios e dados ausentes.
- Não deixar placeholders visíveis em produção.
- Registrar decisões arquiteturais relevantes.
