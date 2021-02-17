# Olá!

Você está então agora entrando na jornada de uma pessoa SRE, vamos apenas realizar alguns testes para entender como você avalia problemas e desenvolve soluções criativas e eficientes para problemas modernos.

Algumas regras:

- Você está livre para pesquisar e utilizar as ferramentas que está acostumado para resolver o problema desde que mantenha as tecnologias obrigatórias: **GitHub Actions, Docker, Kubernetes**.

*OBS*: Não é permitido usar quaisquer tipos de SGBDs (PostgreSQL, MySQL, Mongo, Cassandra ... )

## Contexto

Uma clínica laboratorial necessita de um simples sistema que possa cadastrar pacientes e seus devidos históricos de doenças/comorbidades analisadas durante o tempo. O Laboratório deseja que esse sistema seja desenvolvido em uma arquitetura escalável, e que possua um fluxo de CI (Continious Integration) para garantir que as funcionalidades à serem entregues e eventuais modificações no sistema, não afetem seu comportamento regular.

## APIs

- Desenvolva um microserviço responsável pelo cadastro de pacientes, armazenando informações essenciais sobre a pessoa (Nome, idade, CPF, Endereço, Tipo do Atendimento (Particular ou Convênio) ).
- Desenvolva um segundo microserviço que será responsável por cadastrar o histórico de doenças/comorbidades que um determinado paciente ja teve.
- Desenvolva um terceiro microserviço que retornará as informações de um determinado paciente, assim como seu histórico de doenças, a partir de um CPF a ser consultado.

## Deploy

Os 3 microserviços desenvolvidos devem ser Dockerizados e deployados em um cluster Kubernetes, para fins didáticos utilize o [Minikube](https://minikube.sigs.k8s.io/docs/start/).

## Análise de Performance

Além dos testes funcionais a serem realizados no pipeline, gere um relatório de testes de performance dos 3 microserviços propostos.
