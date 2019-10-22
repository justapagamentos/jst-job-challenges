# Desafio @ Justa DevOps

## Descrição

Você deve provisionar uma instância Linux para realizar o continuous delivery de uma aplicação em Golang. O processo de build e deploy deve ser realizado utilizando a ferramenta Open Source [Jenkins](https://jenkins.io/), a aplciação em Golang e a instância serão fornecidos pelo time da Justa.

O deploy da aplicação deve ser realizado na mesma máquina do Jenkins, o Nginx deve ser configurado para os dois serviços (Jenkins e Aplicação Go) serem acessados via DNS.

### Requisistos Obrigatórios e Inegociáveis

- O deploy da aplicação deverá ser realizado levando em consideração a branch Master;
- Instalar/Configurar o Nginx como proxy reverso para os domínios abaixo:
  - **jenkins-devops.justa.com.vc** (Subdomínio para o Jenkins)
  - **devops.justa.com.vc** (Subdomínio para a aplicação Golang)
- Gerar certificado SSL para os domínios citados acima.

### Requisitos Diferenciais

- Utilizar pipeline do Jenkins;
- Habilitar webhook do Github e Jenkins para deploy automático;
- Utilizar docker para o build da aplicação;
- Criar Job periódico para renovar certificado SSL dos domínios.

### Links Úteis

- [Aplicação Golang](https://github.com/justapagamentos/jst-devops-test)
- [Nginx Config IO](https://nginxconfig.io)
- [Certbot](https://certbot.eff.org/)


