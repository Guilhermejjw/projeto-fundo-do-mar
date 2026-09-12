import "./Header.css"

// Criamos uma função JavaScript que representa o nosso componente
function Header() {
  // O comando return entrega o código HTML/JSX que será desenhado na tela
  return (
    // Tag semântica que indica o cabeçalho da página
    <header>
      {/* Título principal do projeto */}
      <h1>Embarque em uma viagem aos mistérios do oceano.</h1>
      
      {/* Subtítulo ou frase descritiva */}
      <p>Descubra os segredos escondidos no lugar menos explorado do planeta.</p>
      
      {/* Elemento de navegação com atributo para acessibilidade (leitores de tela) */}
      <nav aria-label="Navegação principal">
        {/* Lista não ordenada usada para organizar os links de forma semântica */}
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#criaturas">Criaturas Marinhas</a></li>
          <li><a href="#curiosidades">Curiosidades</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Exportamos a função para que ela possa ser importada em outros arquivos (como o App.jsx)
export default Header;