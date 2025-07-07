import React from 'react'
import "../Css/carrinho.css"
import Footer from './footer'
import Header from './Header'

function Carrinho() {
  return (
    <>
     <Header/>
      <section id="carrinho">
      <div id="lista-carrinho">
      <h1 id="titulo-main">Seu Carrinho</h1>
        <div class="bloco-produto">
          <div class="info">
          <img src="../src/img/img-carrinho-1.png" alt="" class="imagem"/>
          <p class="nome-produto">Desktop XPS</p>
          </div>
          <div class="excluir-produto">
            <button class="botao-carrinho">Excluir</button>
            <p class="preco">R$10.199,00</p>
          </div>
        </div>


        <div class="bloco-produto">
          <div class="info">
          <img src="../src/img/img-carrinho-2.png" alt="" class="imagem"/>
          <p class="nome-produto">CRUA Monitor Curvo</p>
          </div>
          <div class="excluir-produto">
            <button class="botao-carrinho">Excluir</button>
            <p class="preco">R$1.237,87</p>
          </div>
        </div>


        <div class="bloco-produto">
          <div class="info">
          <img src="../src/img/img-carrinho-3.png" alt="" class="imagem"/>
          <p class="nome-produto">Notebook Apple MacBook Air</p>
          </div>
          <div class="excluir-produto">
            <button class="botao-carrinho">Excluir</button>
            <p class="preco">R$8.499,00</p>
          </div>
        </div>


      <div id="preco-final">
        <div>
          <h1 id="titulo">Total:</h1>
          <h1 id="preco-todo">R$19.935,87</h1>
        </div>


        <button id="botao-pagar">Pagar</button>
      </div>
      </div>
      </section>
      <Footer/>
    </>
  )
}


export default Carrinho



