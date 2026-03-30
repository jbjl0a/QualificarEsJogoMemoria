# Jogo da Memória - Qualificar ES (Logística ABNT)

Um jogo da memória interativo focado no ensino e fixação dos símbolos logísticos oficiais de manuseio e transporte, baseado nas diretrizes da ISO 780 e nas normativas NBR 7500 da ABNT.
Desenvolvido a pedido de um projeto escolar / instrucional associado ao **Programa Qualificar ES**.

## 📦 Características

- **Símbolos ABNT Autênticos:** Ícones desenhados em vetor (SVG nativo) que reproduzem os decalques oficiais presentes em caixas e remessas (Ex: Frágil, Manter Seco, Não Rolar, etc).
- **Design de Alta Qualidade:** Interface moderna e responsiva utilizando as cores oficiais do Estado do Espírito Santo (Azul, Laranja e Verde).
- **Grade 4x4:** 16 cartas gigantes adaptadas para a melhor nitidez e leitura, tanto da imagem quanto do texto explicativo.
- **Animações 3D:** Efeitos dinâmicos (Flip) em CSS puro, gerando feedbacks visuais quando o usuário escolhe um par de cartas.

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/) (Biblioteca JavaScript para construir interfaces de usuário)
- [TypeScript](https://www.typescriptlang.org/) (Tipagem estática para JavaScript)
- [Vite](https://vitejs.dev/) (Build tool e servidor de desenvolvimento ultra-rápido)
- [Node.js](https://nodejs.org/) (Ambiente de execução)
- CSS Vanilla (Para as animações e o Grid Layout)

## 🚀 Como instalar e rodar o projeto localmente

Siga o passo a passo abaixo para rodar o jogo no seu computador:

### Pré-requisitos
- É necessário ter o **[Node.js](https://nodejs.org/)** instalado.

### Passo 1: Clonar e Acessar a pasta
Baixe o projeto do GitHub e entre no diretório criado:
```bash
git clone https://github.com/jbjl0a/QualificarEsJogoMemoria.git
cd QualificarEsJogoMemoria
```

### Passo 2: Instalar as Dependências
Execute o comando abaixo para instalar as bibliotecas do React e ferramentas necessárias:
```bash
npm install
```

### Passo 3: Iniciar o Jogo
Faça o build e execute ativando o modo de desenvolvedor (Dev Server):
```bash
npm run dev
```

O terminal mostrará algo parecido com: `➜  Local:   http://localhost:5173/`. 
Basta segurar a tecla `CTRL` e clicar no link ou copiar a URL para o seu navegador web favorito (Chrome, Edge, Firefox).

## 🎮 Como Jogar
O objetivo do jogo é encontrar os **8 pares** equivalentes (16 cartas).
Cada par correto é formando juntando a imagem (símbolo) que descreve uma regra logística à sua respectiva descrição escrita correspondente. Tente completar com a menor quantidade de `Movimentos` possível!
