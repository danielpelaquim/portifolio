# Instruções para agentes de IA

## 1. Antes de agir

1. Consulte `HANDOFF.md` para conhecer o estado registrado para continuidade. Se não existir, informe isso e só o crie depois de analisar o projeto atual.
2. Leia estas instruções e as demais instruções de agente relevantes.
3. Consulte `TASKS.md` e os documentos de requisitos pertinentes (`PROJECT.md`, `DESIGN.md` e `ARCHITECTURE.md`).
4. Analise o código atual para confirmar o estado real do projeto e compare-o com o `HANDOFF.md`, o `TASKS.md` e os requisitos. Identifique e comunique divergências; não presuma que algo está concluído apenas porque a documentação afirma isso.
5. Identifique a etapa atual no `TASKS.md` e trabalhe somente na etapa autorizada.
6. Resuma o plano de execução antes de fazer mudanças relevantes. Não inicie mudanças significativas antes de compreender o estado atual.
7. Se houver conflito entre documentos, não escolha silenciosamente: explique o conflito e proponha uma resolução. `PROJECT.md` define o escopo; `DESIGN.md` define a direção visual; `ARCHITECTURE.md` define restrições técnicas.

## 2. Continuidade do trabalho

### Ao longo do desenvolvimento

- Mantenha `HANDOFF.md` suficientemente atualizado para permitir uma retomada confiável, registrando decisões importantes, problemas encontrados, mudanças relevantes, validações e próximos passos.
- Quando uma tarefa for concluída, atualize `TASKS.md` se ela estiver registrada nele. Não altere o estado de etapas que não foram concluídas e verificadas.

### Ao encerrar uma sessão

Quando o usuário solicitar o encerramento da sessão ou a preparação para continuar em outra conversa:

1. Revise o trabalho realizado e confirme o estado no código e nos documentos pertinentes.
2. Atualize `HANDOFF.md` com o estado real, alterações concluídas, pendências, decisões importantes e próximos passos.
3. Atualize `TASKS.md` quando necessário e outros documentos apenas se mudanças relevantes justificarem isso.
4. Informe separadamente as verificações executadas, seus resultados e as verificações não realizadas.
5. Apresente uma mensagem curta de como retomar o trabalho na próxima sessão.

Não afirme que um arquivo foi atualizado sem realmente atualizá-lo. Encerrar uma sessão não autoriza mudanças adicionais nas funcionalidades.

## 3. Desenvolvimento por etapas — obrigatório

- O desenvolvimento ocorre por etapas sequenciais.
- Implemente somente a etapa atual.
- Ao terminar, execute as verificações aplicáveis e compare o resultado com todos os critérios de aceitação da etapa.
- Informe arquivos alterados, funcionalidades implementadas, comandos executados, resultados, limitações e pendências.
- Atualize `TASKS.md` com o estado real, sem marcar como concluído o que não foi verificado.
- **Pare e aguarde aprovação explícita do usuário antes de começar a próxima etapa.**
- Não interprete silêncio como aprovação.
- Se uma etapa falhar, corrija os problemas dentro do escopo atual; se não for possível, explique o bloqueio e peça orientação.

## 4. Qualidade de código

- Use React e TypeScript conforme a arquitetura definida.
- Prefira componentes reutilizáveis e responsabilidades claras.
- Evite duplicação e abstrações desnecessárias.
- Não adicione dependências sem necessidade; explique o benefício e o custo de dependências novas.
- Mantenha nomes claros e consistentes.
- Trate erros, estados vazios e recursos indisponíveis.
- Não silencie erros de compilação, lint ou testes.
- Não altere configuração importante sem entender o impacto.

## 5. Validação obrigatória

Quando aplicável:
- Execute instalação de dependências apenas quando necessário.
- Execute build (`npm run build`).
- Execute testes e lint se estiverem configurados.
- Verifique erros e avisos relevantes no console.
- Verifique links e carregamento de imagens/fontes.
- Confira layout em larguras de celular, tablet e desktop.
- Teste navegação por teclado, foco visível e seletor de idioma.
- Teste `prefers-reduced-motion`.
- Valide o caminho de implantação `/portfolio/` com preview/build apropriado.
- Não diga que uma verificação foi executada se não a executou.
- Se o ambiente impedir um teste, declare a limitação.

## 6. Organização e documentação

- Preserve a organização do projeto.
- Registre decisões técnicas importantes em `ARCHITECTURE.md`.
- Atualize `TASKS.md` após cada etapa validada.
- Mantenha instruções de execução e publicação atualizadas.
- Não reescreva documentos inteiros sem necessidade.
- Não apague trabalho do usuário sem explicar e obter autorização quando houver risco de perda.

## 7. Proteção de dados e veracidade

- Não invente experiências profissionais, resultados, métricas, cursos, diplomas, certificações, datas, idiomas, níveis de proficiência ou projetos.
- Diferencie informações confirmadas, pendentes e exemplos internos.
- Não publique placeholders, endereços pessoais ou dados de contato sem confirmação/autorização.
- Use a foto fornecida pelo usuário como referência e não substitua a identidade da pessoa por uma imagem gerada.
- Não inclua chaves, tokens, senhas ou segredos no repositório.
- Não envie dados pessoais a serviços externos sem autorização.
- Não faça commits, push, deploy ou publicação em nome do usuário sem autorização explícita para essa ação.

## 8. Fidelidade ao escopo

- Preserve a identidade Matrix cinematográfica com interface minimalista.
- Não introduza tema claro, efeitos sonoros, formulário com backend, analytics, banco de dados ou funcionalidades fora do escopo.
- Preserve compatibilidade com GitHub Pages em `/portfolio/`.
- Não transforme a lista inicial de tecnologias em afirmações de domínio comprovado.
- Não apresente ideias ou protótipos como projetos concluídos e funcionais.
- Não inclua currículo PDF na primeira versão.
- Não acrescente funcionalidades fora do escopo sem explicar a justificativa e pedir aprovação.

## 9. Animações, acessibilidade e desempenho

- Respeite `prefers-reduced-motion`.
- Evite animações que causem flashes intensos ou impeçam leitura.
- Garanta que os controles permaneçam interativos por cima do fundo.
- Use semântica HTML adequada e acessibilidade por teclado.
- Não dependa exclusivamente de hover.
- Reduza custo de animação em telas pequenas e quando a aba estiver oculta.
- Garanta uma apresentação útil mesmo que a animação não carregue.

## 10. Definição de concluído

Uma tarefa só está concluída quando:
1. O trabalho corresponde ao escopo aprovado.
2. Os critérios de aceitação foram verificados.
3. As verificações aplicáveis foram executadas e reportadas.
4. A documentação e o `TASKS.md` refletem o estado real.
5. Não existem erros conhecidos relevantes ocultados.
6. O agente apresentou o relatório e parou para aguardar aprovação da etapa.
