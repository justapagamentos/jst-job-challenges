# Data App

Uma SPA para exibição de dados.

## Para executar esse projeto

1. Clone este repositório.
3. Execute o comando `$ npm install && npm start`

## Para criar Pull Requests

1. Na sua `branch-filha`, a que se deseja unir com a principal, execute `$ git push` para atualizá-la no repositório remoto.
2. Execute `$ git checkout branch-principal` e em seguida `$ git pull` para atualizar a **branch principal** no repositório local.
3. Execute `$ git checkout branch-filha` e `$ git pull` para confirmar que a **branch filha** está atualizada.
4. Execute `$ git rebase branch-principal` para iniciar o **rebase**.
5. If there is a difference:
    1. Open *VS Code* to make adjustments
    2. Run `$ git add .` to add changes
    3. Check file changes with `$ git status`
    4. Run `$ git rebase --continue` to continue the rebase
    5. Repeat *step five* until the changes no longer exist
6. Run `$ git push` to update remote repository with rebase changes
7. Open `Pull Request` on GitHub