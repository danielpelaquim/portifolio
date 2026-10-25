# Portfolio — Daniel Lopes Pelaquim

## 1. Objetivo

Construir um portfólio pessoal estático para apresentar Daniel Lopes Pelaquim como:

> **Engenheiro de Software | Criando soluções inteligentes com código e IA**

O portfólio deve destacar desenvolvimento Full Stack e aplicações com Inteligência Artificial, apresentando apenas projetos reais e funcionais como projetos concluídos. O site será bilíngue (português e inglês), terá identidade visual Matrix cinematográfica com interface minimalista e será publicado no GitHub Pages.

## 2. Público e posicionamento

- Recrutadores, profissionais de tecnologia, possíveis parceiros e pessoas interessadas nos projetos.
- Prioridade: demonstrar competências técnicas por meio de projetos concretos.
- A experiência na Maravilha Passagens pode aparecer em contexto secundário, sem competir com o posicionamento técnico.
- Não inventar experiências, qualificações, resultados, projetos, datas, métricas ou depoimentos.

## 3. Idiomas

Disponibilizar seletor visível com:
- 🇧🇷 Português
- 🇺🇸 English

A troca de idioma deve atualizar todos os textos da interface, navegação, descrições, rótulos, botões, mensagens de acessibilidade e conteúdo dos projetos. Evitar recarregamento completo quando possível. Usar português como idioma padrão.

## 4. Seções do site

1. **Início** — apresentação principal, título profissional e botões para projetos e GitHub.
2. **Sobre mim** — resumo profissional, com dados confirmados e campos pendentes ocultos até serem preenchidos.
3. **Habilidades técnicas** — categorias interativas: Front-end, Back-end, Banco de Dados, Inteligência Artificial, APIs e Ferramentas.
4. **Projetos** — todos os projetos, inclusive os de inteligência artificial, em uma seção única com cards interativos.
5. **Experiência profissional** — foco na experiência relevante para tecnologia. Maravilha Passagens pode ser mencionada de forma secundária.
6. **Formação acadêmica** — estrutura para graduação, pós-graduação, cursos complementares e certificações.
7. **Contato** — GitHub, LinkedIn e e-mail profissional.

Os rótulos numerados das seções devem seguir a ordem exibida, sem lacunas.

Não incluir currículo PDF na primeira versão, mas manter a arquitetura simples para adicioná-lo no futuro.

## 5. Projetos

- A versão inicial deve suportar de 1 a 3 projetos, sem limitar o crescimento futuro. Novos projetos devem ser incluídos na seção única “Projetos”.
- Mostrar apenas projetos existentes e funcionais como concluídos.
- Não preencher cards com exemplos fictícios na versão publicada.
- Se ainda não houver conteúdo real cadastrado, mostrar uma mensagem honesta e visualmente integrada, ou manter a seção preparada sem inventar projetos.
- Cada card pode conter: nome, descrição, tecnologias, repositório GitHub, link de demonstração (quando existir), imagem opcional e estado confirmado.
- Os dados dos projetos devem ser mantidos em arquivos Markdown e convertidos/consumidos durante a compilação ou por uma solução estática adequada. Não usar backend.

## 6. Habilidades

Categorias:
- Front-end
- Back-end
- Banco de Dados
- Inteligência Artificial
- APIs
- Ferramentas

Tecnologias inicialmente consideradas a partir das conversas: JavaScript, React, TypeScript, Node.js, Express, SQL, Python, Flask, Django, APIs REST, LLMs, agentes de IA, automações, Git, GitHub e VS Code.

**Importante:** essa lista é uma lista inicial para revisão, não uma afirmação automática de domínio profissional. Os dados devem ser editáveis e não devem atribuir nível, proficiência ou experiência prática sem confirmação explícita. Não usar barras ou percentuais artificiais de proficiência.

## 7. Links e dados pessoais

- GitHub: `https://github.com/danielpelaquim`
- LinkedIn: `https://br.linkedin.com/in/danielpelaquim`
- E-mail profissional: `[PENDENTE: inserir endereço]`
- Nome de usuário do GitHub: `danielpelaquim`
- URL esperada do site após ativação do Pages: `https://danielpelaquim.github.io/portifolio/`

Não publicar placeholders, textos de instrução ou dados pessoais não autorizados no site final. Um placeholder é permitido apenas em documentação e ambiente de desenvolvimento.

## 8. Foto

Usar a foto pessoal fornecida pelo usuário como recurso local do projeto. A foto deve ser apresentada em formato circular, com borda verde neon e integração com a estética Matrix. Preservar o rosto e a proporção; não substituir por imagem gerada nem alterar a identidade da pessoa. Não aplicar filtros agressivos sem aprovação. Usar texto alternativo apropriado.

## 9. Requisitos funcionais

- Menu superior com navegação tradicional e estética Matrix; compacto em dispositivos móveis.
- Seletor de idioma português/inglês.
- Navegação por âncoras entre seções.
- Cards interativos para projetos.
- Categorias de habilidades interativas.
- Links externos para GitHub, LinkedIn e e-mail quando os dados estiverem configurados.
- Links externos seguros (`rel="noopener noreferrer"` quando aplicável).
- SEO básico: título, descrição, idioma, Open Graph e favicon quando disponível.
- Site estático, sem servidor, banco de dados ou formulário de contato.
- Preparado para publicação no repositório GitHub `danielpelaquim/portifolio`, em `https://danielpelaquim.github.io/portifolio/`.

## 10. Animações e experiência

- Fundo Matrix cinematográfico com caracteres verdes em velocidades variadas.
- Efeito de digitação e cursor piscando na apresentação.
- Transições futuristas e brilhos controlados.
- Menu, textos e cards devem continuar legíveis.
- A animação não pode bloquear interações nem provocar rolagem horizontal.
- Respeitar `prefers-reduced-motion`.
- Simplificar ou reduzir animações em dispositivos móveis e em condições de baixo desempenho.
- Evitar loops de animação pesados, excesso de elementos no DOM e trabalho contínuo desnecessário.

## 11. Requisitos não funcionais

- Responsivo em celular, tablet e desktop.
- Acessível por teclado, com foco visível, landmarks semânticos, contraste adequado e rótulos claros.
- Desempenho razoável mesmo com animação de fundo.
- Componentes reutilizáveis, código tipado e dependências justificadas.
- Sem backend e sem banco de dados.
- Compatível com GitHub Pages e caminhos relativos do projeto.
- Conteúdo facilmente atualizável sem reescrever componentes.

## 12. Critérios globais de aceitação

- `npm run build` termina sem erros.
- O site funciona localmente e no subcaminho `/portifolio/`.
- Não há links quebrados conhecidos, erros de console relevantes ou conteúdo fictício apresentado como real.
- Seletor PT/EN traduz todas as áreas visíveis.
- A animação respeita movimento reduzido e não prejudica navegação ou legibilidade.
- Layout testado em larguras de celular, tablet e desktop.
- Teclado permite alcançar e ativar controles.
- Cada etapa é validada e aprovada pelo usuário antes da próxima.
