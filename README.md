# Play.s

Projeto criado para descobrir quais os estilos musicais de playlist do Spotify.

## Informações Gerais

- [Wiki](https://github.com/dxxglas/jst-job-challenges/wiki)
- [Kanban](https://github.com/dxxglas/jst-job-challenges/projects/1)

## Boas Práticas

- As branchs desse repositório devem seguir esse modelo:
    - `main`: produção
    - `develop`: desenvolvimento
    - `feature-issue`: issues em desenvolvimento
    - `bugfix-issue`: issues de ajuste e solução de erros

- Os commits devem ser realizados em português e seguir o modelo:
    - **feature-issue** + : + descrição, ou seja: `feature-issue: descrição`

## Para executar esse projeto

1. Clone este repositório.
2. Execute o comando `$ npm install` seguido por `$ npm start`
3. O projeto será exibido em `http://localhost:3000`

## Para criar Pull Requests

1. Na **branch-filha**, a que se deseja unir com a branch principal, execute `$ git push` para atualizá-la no repositório remoto.
2. Execute `$ git checkout branch-principal` e em seguida `$ git pull` para atualizar a **branch principal** no repositório local.
3. Execute `$ git checkout branch-filha` e em seguida `$ git pull` para confirmar que a **branch filha** está atualizada no repositório local.
4. Na **branch filha**, execute `$ git rebase branch-principal` para iniciar o **rebase**.
5. Se existirem conflitos:
    1. Abra o *VS Code* para checar os conflitos e realizar os ajustes
    2. Execute `$ git add .` para *adicionar* as mudanças
    3. Confirme os arquivos modificados com `$ git status`
    4. Execute `$ git rebase --continue` para continuar o rebase
    5. Caso existam novos conflitos, repita os passos anteriores
6. Execute `$ git push` para atualizar o repositório remoto com as mudanças do rebase
7. Abra o `Pull Request` da **branch filha** para a **branch principal**