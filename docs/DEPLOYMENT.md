# Publicação manual no GitHub Pages

O repositório público é `danielpelaquim/portifolio`. O Vite está configurado para servir a build sob `/portifolio/`, caminho usado pelo GitHub Pages para este repositório. A publicação usa a branch `gh-pages`, sem workflow automático.

## Publicação inicial

1. Envie o código-fonte para a branch `main` do repositório `https://github.com/danielpelaquim/portifolio`.
2. No projeto local, execute:

   ```powershell
   npm ci
   npm run build
   ```

3. Crie e selecione uma branch `gh-pages` a partir da branch `main`.
4. Copie **o conteúdo** de `dist/` para a raiz da branch `gh-pages`. A raiz publicada deve conter o `index.html`, a pasta `assets/` e o `favicon.svg`; não copie `dist/` como uma subpasta.
5. Faça commit e push da branch `gh-pages`.
6. No GitHub, abra **Settings → Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, selecione `gh-pages` e a pasta `/(root)`, e salve.

Após a ativação, o endereço esperado é `https://danielpelaquim.github.io/portifolio/`. Considere publicado somente depois de confirmar que a página está acessível nesse endereço.

## Atualizações

Após alterar o site, envie o código para `main` e execute `npm run build`. Em seguida, atualize o conteúdo da raiz de `gh-pages` com o conteúdo recém-gerado de `dist/`, faça commit e push. A publicação não é automática.
