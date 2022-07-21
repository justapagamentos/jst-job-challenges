# Bem-vindo(a) à etapa de desafio da Justa!

## Instruções

Você precisará desenvolver todos os 4 desafios de lógica de programação propostos abaixo utilizando a linguagem de programação da sua preferência, assim como testes unitários para todos, que cubram pelo menos 4 tipos de entradas diferentes. Para avaliarmos, precisamos que seja criado um repositório público no github e que o link seja enviado para a pessoa do time da Justa com quem você conversou.

**Dicas adicionais:**

- Se possível, comente seu código para que possamos entender cada etapa da sua lógica de resolução do problema;
- Mesmo que não tenha finalizado os desafios por completo no tempo proposto, é importante que você nos envie para que possamos te ajudar e passar o feedback;
- Adicione todas as informações necessarias para executar os testes no README do projeto;
- Boa sorte e #TamoJusto!

## Desafios: 

- [Encontre as interseções](#encontre-as-interseções)
- [Palavra mais longa](#palavra-mais-longa)
- [Calcule o Fatorial](#calcule-o-fatorial)
- [O peso da última pedra](#o-peso-da-última-pedra)

## Encontre as interseções

Escreva uma função, que receba um parâmetro de uma lista de String contendo dois elementos. Cada elemento contém uma string com sequência de números ordenados de forma crescente. E sua função deve retornar uma String contendo os números ordenados que aparecem nas duas listas:

**Exemplos:**

```
Entrada: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Saída: 1,4,13

Entrada: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Saída: 1,9,10
```

## Palavra mais longa

Escreva uma função, que receba uma String e retorne a palavra mais longa desta String.

- Se houver duas ou mais palavras com o mesmo comprimento, retorne a primeira palavra mais longa da String.
- Ignore as pontuações e a situação em que a String será vazia.
- As palavras também podem conter números, mas somente as letras serão consideradas no tamanho da palavra.

**Exemplos:**

```
Entrada: "Hello world123 567"
Saída: Hello

Entrada: "Justa é a fintech que mais cresce no Brasil"
Saída: fintech

Entrada: "Justino é o mascote da Justa"
Saída: Justino
```

## Calcule o Fatorial

Escreva uma função que receba um parâmetro de um número inteiro e retorne o fatorial deste número.

**Exemplo:**

Se número = 4, então seu programa deve retornar `(4*3*2*1) = 24` .

## O peso da última pedra

Cria uma função que receberá uma array de números inteiros; cada número representa o peso de uma pedra. Em cada rodada, as duas pedras mais pesadas devem colidir entre si. Considerando que elas sejam chamadas de pedra A e pedra B, onde A >= B:

- Se A == B, as duas pedras são destruídas (removidas da array);
- Se A != B, a pedra de peso B é destruída enquanto a de peso A tem seu peso atualizado para `A - B` (diferença entre os pesos).

Esse é um jogo de rodadas e, ao final, deve-se restar uma pedra ou nenhuma! O resultado da função deve ser o retorno de um número inteiro com o peso da última pedra restante; caso não tenha nenhuma pedra restante, retorne `0`.

**Exemplos:**

```
Entrada: [1, 7, 4, 10, 16]
Saída: 2

Entrada: [2, 3, 9, 8]
Saída: 0

Entrada: [1]
Saída: 1
```
