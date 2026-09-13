// Importa o React, os hooks de estado/referência e o QuickPinchZoom
import React, { useState, useRef, useCallback } from "react";
import QuickPinchZoom from "react-quick-pinch-zoom";
import "./Main.css";

// Importações das imagens da pasta assets
import peixe from "../../assets/peixe-pescador.jfif";
import lula from "../../assets/lula-gigante.png";
import peixebolha from "../../assets/peixe-bolha.avif";
import tubarao from "../../assets/tubarao-duende.jpg";
import transparente from "../../assets/peixe-olhos-de-barris.webp";
import polvo from "../../assets/polvo-mimico.jpg";

function Main() {
  // Estado que guarda a imagem selecionada para abrir no modal
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  // Referência para controlar a tag <img> no zoom
  const imgRef = useRef();

  // Função que atualiza o zoom e o movimento aplicando CSS inline diretamente
  const onUpdate = useCallback(({ x, y, scale }) => {
    if (imgRef.current) {
      imgRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    }
  }, []);

  // Função para fechar o modal
  const fecharModal = () => setImagemSelecionada(null);

  return (
    <main id="inicio">
      <h2>O que Escondem as Profundezas?</h2>
      <p>
        O oceano cobre mais de 70% da Terra, mas suas profundezas ainda guardam mistérios 
        inexplorados. Abaixo, conheça as surpreendentes adaptações que algumas espécies 
        desenvolveram para sobreviver na escuridão e sob extrema pressão:
      </p>

      <section id="criaturas" aria-labelledby="titulo-criaturas">
        <h3 id="titulo-criaturas">Habitantes das Profundezas</h3>

        <div className="cards-container">
          {/* Card 1 */}
          <article>
            <img 
              src={peixe} 
              alt="Peixe-Pescador" 
              className="card-img"
              onClick={() => setImagemSelecionada({ src: peixe, alt: "Peixe-Pescador" })}
            />
            <h4>Peixe-Pescador</h4>
            <p>Utiliza uma isca bioluminescente para atrair suas presas na escuridão total do oceano.</p>
          </article>

          {/* Card 2 */}
          <article>
            <img 
              src={lula} 
              alt="Lula-Gigante" 
              className="card-img"
              onClick={() => setImagemSelecionada({ src: lula, alt: "Lula-Gigante" })}
            />
            <h4>Lula-Gigante</h4>
            <p>Possui os maiores olhos do reino animal, adaptados para enxergar na penumbra do fundo do mar.</p>
          </article>

          {/* Card 3 */}
          <article>
            <img 
              src={peixebolha} 
              alt="Peixe-Bolha" 
              className="card-img"
              onClick={() => setImagemSelecionada({ src: peixebolha, alt: "Peixe-Bolha" })}
            />
            <h4>Peixe-Bolha</h4>
            <p>Seu corpo gelatinoso e sem ossos permite resistir à extrema pressão das profundezas.</p>
          </article>

          {/* Card 4 */}
          <article>
            <img 
              src={tubarao} 
              alt="Tubarão-Duende" 
              className="card-img"
              onClick={() => setImagemSelecionada({ src: tubarao, alt: "Tubarão-Duende" })}
            />
            <h4>Tubarão-Duende</h4>
            <p>Espécie pré-histórica com uma mandíbula retrátil que se lança para a frente para capturar presas.</p>
          </article>

          {/* Card 5 */}
          <article>
            <img 
              src={transparente} 
              alt="Peixe-Olhos-de-Barris" 
              className="card-img"
              onClick={() => setImagemSelecionada({ src: transparente, alt: "Peixe-Olhos-de-Barris" })}
            />
            <h4>Peixe-Olhos-de-Barris</h4>
            <p>Possui a cabeça totalmente transparente e olhos verdes tubulares que giram internamente.</p>
          </article>

          {/* Card 6 */}
          <article>
            <img 
              src={polvo} 
              alt="Polvo-Mímico" 
              className="card-img"
              onClick={() => setImagemSelecionada({ src: polvo, alt: "Polvo-Mímico" })}
            />
            <h4>Polvo-Mímico</h4>
            <p>Consegue mudar de cor, textura e formato para imitar outros animais marinhos e enganar predadores.</p>
          </article>
        </div>
      </section>

      {/* Modal exibido apenas quando houver uma imagem selecionada */}
      {imagemSelecionada && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="fechar-btn" onClick={fecharModal} aria-label="Fechar modal">✕</button>
            
           <QuickPinchZoom 
              onUpdate={onUpdate} 
              draggableUnZoomed={false}
              tapZoomFactor={1}
              doubleTapZoomFactor={2}
            >
              <img
                ref={imgRef}
                src={imagemSelecionada.src}
                alt={imagemSelecionada.alt}
                className="modal-img"
              />
            </QuickPinchZoom>
            <span className="modal-dica">Use a rodinha do mouse para dar zoom e arraste para mover</span>
          </div>
        </div>
      )}
    </main>
  );
}

export default Main;