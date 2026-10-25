# Design System — Matrix Cinematográfico Minimalista

## 1. Direção visual

Combinar um fundo Matrix cinematográfico com interface minimalista e profissional. A atmosfera deve ser futurista, imersiva e tecnológica, mas não pode competir com a leitura do conteúdo.

## 2. Paleta sugerida

Usar variáveis CSS centralizadas; os valores abaixo são ponto de partida e podem ser refinados durante a implementação:

- `--color-bg`: `#030605` — fundo principal quase preto.
- `--color-surface`: `#07110B` — superfícies e cards.
- `--color-surface-raised`: `#0B1910` — superfícies elevadas.
- `--color-matrix`: `#00FF66` — verde neon principal.
- `--color-matrix-soft`: `#7CFFAA` — verde claro para detalhes.
- `--color-matrix-deep`: `#008F3D` — verde profundo.
- `--color-text`: `#E8F5EC` — texto principal.
- `--color-text-muted`: `#A4B7AA` — texto secundário.
- `--color-border`: `rgba(0, 255, 102, 0.28)` — bordas sutis.
- `--color-focus`: `#B7FFD0` — foco de teclado.

Evitar usar neon em todos os textos. Verde intenso é para destaques, links, bordas, cursores e elementos ativos. Garantir contraste suficiente.

## 3. Tipografia

- Fonte de interface: fonte sem serifa moderna, com fallbacks do sistema.
- Fonte monoespaçada: para efeito de terminal, pequenos rótulos e elementos técnicos.
- Títulos claros e fortes, corpo confortável para leitura.
- Evitar parágrafos longos em monoespaçada.
- Não depender de fontes externas para a página funcionar.

## 4. Fundo Matrix

- Caracteres verdes descendo em colunas e velocidades variadas.
- Preferir `canvas` ou implementação eficiente equivalente, evitando criar centenas de nós DOM.
- O fundo deve ficar atrás do conteúdo e não receber eventos de mouse.
- Usar baixa opacidade em boa parte dos caracteres e poucos destaques luminosos.
- Manter fundo visualmente mais discreto atrás de parágrafos e cards.
- Evitar flicker excessivo e brilho que prejudique a leitura.
- Pausar ou reduzir animação quando a aba estiver oculta, se apropriado.
- Em `prefers-reduced-motion: reduce`, desativar ou substituir a chuva por um fundo estático discreto.
- Em telas pequenas, reduzir densidade e custo de renderização.

## 5. Tela inicial

A decisão final de microanimação pode ser resolvida pelo agente de acordo com esta direção: começar com uma breve inicialização visual inspirada em terminal e revelar a apresentação cinematográfica, sem atrasar o acesso ao conteúdo.

Conteúdo:
- Nome: Daniel Lopes Pelaquim.
- Título: “Engenheiro de Software | Criando soluções inteligentes com código e IA”.
- Versão em inglês: “Software Engineer | Building Intelligent Solutions with Code and AI”.
- Botão primário: ir para projetos.
- Botão secundário: GitHub, apenas quando URL configurada.
- Foto pessoal circular, com borda verde neon e brilho controlado.

Não manter uma tela de carregamento que obrigue o visitante a esperar. A apresentação deve continuar acessível mesmo se a animação falhar.

## 6. Foto de perfil

- Exibição circular (`aspect-ratio: 1 / 1`, `object-fit: cover`).
- Borda verde neon fina ou média.
- Brilho externo verde controlado e ajuste sutil de luminosidade, contraste e saturação para integrar a foto à paleta Matrix.
- Preservar rosto, identidade e proporção.
- Aplicar os efeitos apenas via CSS; preservar o arquivo de imagem original.
- Garantir que a imagem não distorça nem cause layout shift.
- Texto alternativo em ambos os idiomas.

## 7. Navegação

- Menu tradicional no topo com acabamento Matrix.
- Links para as seções definidas em `PROJECT.md`.
- Seletor de idioma com rótulos “🇧🇷 Português” e “🇺🇸 English”.
- Em dispositivos móveis, usar menu compacto acessível por teclado e leitor de tela.
- Estado ativo e foco de teclado visíveis.
- Não usar ícones sem rótulo acessível quando a função não for óbvia.

## 8. Cards de projeto

- Fundo escuro, borda verde discreta e cantos consistentes.
- Hover/focus com brilho e elevação leves.
- Nome, descrição, tecnologias e links.
- Animações devem funcionar também com teclado (`:focus-visible`) e não depender apenas de hover.
- Evitar efeitos que movam excessivamente o layout.
- Não usar conteúdo fictício na versão publicada.

## 9. Categorias de habilidades

Categorias interativas:
1. Front-end
2. Back-end
3. Banco de Dados
4. Inteligência Artificial
5. APIs
6. Ferramentas

Cada categoria pode incluir ícone simples, breve descrição e lista de tecnologias confirmadas. Evitar barras de proficiência e percentuais sem fundamento.

## 10. Movimento e transições

- Transições suaves, curtas e consistentes.
- Efeito de digitação com cursor piscando na apresentação, mas manter o texto completo disponível para tecnologias assistivas e quando JavaScript estiver desativado.
- Não usar som.
- Respeitar `prefers-reduced-motion`.
- Evitar parallax pesado e animações que impeçam leitura ou interação.

## 11. Responsividade

- Mobile-first.
- Testar pelo menos larguras aproximadas de 360 px, 768 px e 1280 px.
- Sem rolagem horizontal.
- Cards empilhados em telas estreitas.
- Menus e botões com alvos de toque confortáveis.
- Reduzir densidade da animação Matrix em dispositivos móveis.

## 12. Acessibilidade visual

- Contraste adequado entre texto e fundo.
- Foco de teclado claro.
- Não comunicar estados somente por cor.
- Áreas animadas não devem piscar rapidamente.
- Links, botões e controles com estados hover, focus, active e disabled coerentes.
