import React from "react";

function Main() {
  return (
    // Tag semântica que define o conteúdo principal e exclusivo da página
    <main id="inicio">
      <h2>Curiosidades do Fundo do Mar</h2>
      <p>
        O oceano cobre a maior parte do nosso planeta, mas as profundezas marinhas 
        permanecem entre os locais menos explorados da Terra. Conheça abaixo algumas 
        das incríveis adaptações que a vida marinha desenvolveu para sobreviver no abismo:
      </p>

      {/* Agrupamos o bloco de cards dentro de uma seção temática */}
      <section id="criaturas" aria-labelledby="titulo-criaturas">
        {/* O id liga esta tag h3 ao aria-labelledby da section para acessibilidade */}
        <h3 id="titulo-criaturas">Habitantes das Profundezas</h3>

        {/* Cada article funciona como um 'card' independente reutilizável */}
        <article>
          <h4>Peixe-Pescador</h4>
          <p>Utiliza uma isca bioluminescente para atrair suas presas na escuridão total do oceano.</p>
        </article>

        <article>
          <h4>Lula-Gigante</h4>
          <p>Possui os maiores olhos do reino animal, adaptados para enxergar na penumbra do fundo do mar.</p>
        </article>

        <article>
          <h4>Peixe-Bolha</h4>
          <p>Seu corpo gelatinoso e sem ossos permite resistir à extrema pressão das profundezas.</p>
        </article>
      </section>
    </main>
  );
}

export default Main;