import React from "react";

// Importamos os nossos três componentes criados na pasta 'components'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

// Este é o componente principal (pai) da aplicação
function App() {
  return (
    // Usamos um React Fragment (<> e </>) para agrupar múltiplos componentes sem criar divs desnecessárias no HTML final
    <>
      {/* Chamamos os componentes na ordem exata de exibição da tela */}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;