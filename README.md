# 🌊 Habitantes das Profundezas (React + Vite)

Aplicação desenvolvida para fins de estudo e prática de **React** ⚛️, com foco em componentes, estilização responsiva com CSS Grid e interatividade com estados (`useState`). O projeto explora criaturas marinhas misteriosas das profundezas do oceano 🦑, apresentando cartões informativos e uma janela modal interativa para ampliar e explorar as imagens.

## 🚀 Tecnologias Utilizadas

* **React** ⚛️ (Biblioteca JavaScript para construção da interface)
* **Vite** ⚡ (Ferramenta de build e servidor de desenvolvimento ultrarrápido)
* **CSS3** 🎨 (Estilização customizada, Flexbox e CSS Grid Responsivo)
* **Git e GitHub** 🐙 (Controle de versão e hospedagem)

## 📱 Funcionalidades

* **Grid Responsivo:** Layout adaptável que se ajusta automaticamente para celular 📱 (1 coluna), tablet 📟 (2 colunas) e computador 💻 (3 colunas).
* **Galeria de Criaturas:** Exibição de 6 espécies marinhas 🐠 com informações detalhadas sobre suas adaptações únicas.
* **Modal Interativo de Imagem:** Ao clicar na foto de qualquer criatura 🔍, uma janela modal se abre para visualização ampliada, contando com recursos de zoom por scroll 🖱️ e arraste por movimento do mouse ✋.

## 📂 Estrutura do Projeto

```text
projeto-aula-react/
├── public/
│   └── imagens/          📂 # Imagens locais dos cards de criaturas
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer/       🦶 # Rodapé da aplicação
│   │   ├── Header/       📌 # Cabeçalho da página
│   │   └── Main/         🌟 # Conteúdo principal, cards e modal
│   ├── App.jsx           ⚙️ # Componente raiz
│   ├── main.jsx          🚀 # Ponto de entrada do React
│   └── global.css        🎨 # Estilos globais
├── package.json          📦
└── README.md             📖