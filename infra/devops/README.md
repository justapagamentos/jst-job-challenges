# Desafio @ Justa DevOps

## Descrição 


### Competência: Infraestrutura e segurança :lock: 
- Você deve ser capaz de acessar um servidor remoto via SSH, a partir de uma chave privada. Após acessar o servidor, criar outro usuário para ser acessado por outros integrantes do time. Para ler um arquivo de log, por exemplo;
- Saber utilizar comandos simples de terminal: ls, cd, mkdir, cat, vi, curl;
- Configurar uma rotina na CRONTAB de um servidor linux, de modo a automatizar a execução de algum script de manutenção.

### Competência: CI/CD e metodologia ágil :blue_heart:
- Você deve ser capaz de configurar um pipeline de build e deploy de uma aplicação. O processo de build e deploy deve ser realizado utilizando a ferramenta Open Source [Jenkins](https://jenkins.io/), a aplicação em Golang e a instância serão fornecidos pelo time da Justa;
- Configurar uma deploy key no repositório para integração com o Jenkins.

### Competência: Entrega de aplicação em produção :rocket:
- Configurar um servidor NGINX como proxy reverso para o direcionamento para a aplicação que está rodando na máquina (a aplicação em Golang);
- Garantir uma conexão segura através de um certificado SSL;
- O deploy da aplicação deve der realizado na própria máquina do Jenkins.

### Requisistos Obrigatórios e Inegociáveis :white_check_mark:

- Acesso à máquina via SSH;
- O deploy da aplicação deverá ser realizado levando em consideração a branch Master;
- Instalar/Configurar o Nginx como proxy reverso para os domínios abaixo:
  - **jenkins.justa.run** (Subdomínio para o Jenkins)
  - **devops.justa.run** (Subdomínio para a aplicação Golang)
- Gerar certificado SSL para os domínios citados acima.

### Requisitos Diferenciais :arrow_up:

- Utilizar pipeline do Jenkins;
- Habilitar webhook do Github e Jenkins para deploy automático;
- Utilizar docker para o build da aplicação;
- Criar Job periódico para renovar certificado SSL dos domínios.

### Links Úteis

- [Aplicação Golang](https://github.com/justapagamentos/jst-devops-test)
- [Nginx Config IO](https://nginxconfig.io)
- [Certbot](https://certbot.eff.org/)
- [SSH](https://kinsta.com/pt/blog/conectar-ao-servidor-via-ssh/)
- [Jenkins](https://www.jenkins.io/doc/)
- [Ansible](https://docs.ansible.com/ansible/latest/index.html)
- [Kubernetes](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/)
- [Docker](https://docs.docker.com/get-started/)


