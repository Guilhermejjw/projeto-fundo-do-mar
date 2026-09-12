// Importamos o React para poder escrever código JSX (mistura de JavaScript com HTML)
import React from "react";

// Criamos uma função JavaScript que representa o nosso componente
function Header() {
  // O comando return entrega o código HTML/JSX que será desenhado na tela
  return (
    // Tag semântica que indica o cabeçalho da página
    <header>
      {/* Título principal do projeto */}
      <h1>Explorando o Fundo do Mar</h1>
      
      {/* Subtítulo ou frase descritiva */}
      <p>Uma viagem a um mundo ainda não plenamente explorado.</p>
      
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