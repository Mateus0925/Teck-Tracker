// src/pages/Home.jsx
import React from 'react';
import PalavraAnimada from '../components/PalavraAnimada';
import Header from '../components/Header';
import "../Css/index.css";
import Footer from './footer';

function Home() {
  return (
    <>
      <div className="fundo">
        <Header />

        <section className="Pagina-Principal">
          <div className="Pagina-Principal-organizao-coluna">
            <div className="Pagina-Principal-1-titulo">
              <h1>Maximize sua produtividade com os nossos equipamentos</h1>
            </div>
            <div className="Pagina-Principal-2-titulo">
              <h1>Simplificamos sua vida com</h1>
              <PalavraAnimada />
            </div>
            <button className='botao-home' style={{ cursor: "pointer" }}>
              ALUGUE AQUI
              <img src="../src/img/Collapse Arrow.png" alt="Seta" />
            </button>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
