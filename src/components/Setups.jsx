import React from 'react'
import "../Css/Produtos.css"
import Footer from './footer';
import Header from './Header';

function Setups() {
  return (
     <>
     <main className="main">
            <Header />
            <div className="container">
                <div className="products-grid">
                    <div >
                        <div className="product-card">
                            <div className="product-image">
                                <img
                                    src="../src/img/img-Setups-1.jpg"
                                    alt="All in One Dell Inspiron 24"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">All in One Dell Inspiron 24</h3>
                                <div className="product-price">R$1.699,00</div>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img
                                    src="../src/img/img-Setups-3.jpg"
                                    alt="Computador Completo Intel "
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">Computador Completo Intel </h3>
                                <div className="product-price">R$35.599,00</div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="product-card">
                            <div className="product-image">
                                <img
                                    src="../src/img/img-Setups-2.jpg"
                                    alt="Computador Completo Intel Core i7 16GB SSD 1TB"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">Computador Completo Intel Core i7 16GB SSD 1TB</h3>
                                <div className="product-price">R$1.859,07</div>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img
                                    src="../src/img/img-Setups-4.jpg"
                                    alt="Computador Completo 2Eletro Fast"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">Computador Completo 2Eletro Fast</h3>
                                <div className="product-price">R$8.499,00</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
        <Footer/>
        </>
  )
}

export default Setups