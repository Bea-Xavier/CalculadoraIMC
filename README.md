## Manual de uso do Calculadora de IMC 

### Resumo Geral

O projeto *Calculadora IMC* consiste em um programa desenvolvido em React Native, que utiliza informações inseridas pelo usuário como o peso e altura por exemplo, para:

1. Calcular o IMC,
2. Informar qual classificação se enquadra o IMC calculado (ex: Peso Normal, Sobrepeso, etc),
3. Indicar qual seria seu peso ideal entre o mínimo e o máximo baseado na altura inserida.

### Pré-requisitos

Antes de baixar o arquivo do projeto e rodar o aplicativo, será necessário ter o *Node.js* instalado na sua máquina.

```bash
[NodeJS](https://nodejs.org/en) 
```

Depois disso é só copiar o link do repositório, criar uma pasta de sua escolha abri-lá no terminal com o git e digitar o seguinte comando: 

```bash
git clone https://github.com/Bea-Xavier/CalculadoraIMC.git 
```

Após isso, você precisará ter o aplicativo *Expo Go* instalado em seu telefone celular, pois é por ele que vamos testar o projeto.

### Utilizando o Expo e baixando dependentes

Depois de ter instaldo o Node.js em sua máquina, ter o repositório em mãos, e ter o Expo Go em seu celular, agora precisaremos baixar os arquivos .expo para tornar o projeto executável para você!

1. Dentro da pasta do repositótio, abra o terminal e digite:

```bash
npm install -g expo-cli
```
2. Em seguida, baixe as dependências necessárias:

```bash
npm install 
```

3. Aguarde tudo ser instalado corretamente, após isso de o seguinte comando para inicializar o projeto: 

```bash
npx expo start --tunnel
```

4. Isso irá gerar um QR Code, que com o aplicativo Expo Go aberto em seu celular irá escanea-lo.

## Considerações finais

Pronto! Agora você já pode usufruir do projeto Calculadora IMC! 

## Autor

Beatriz V. Xavier
