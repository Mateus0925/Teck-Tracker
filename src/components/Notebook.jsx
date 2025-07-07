import React from 'react';
import "../Css/Produtos.css"
import Footer from './footer';
import Header from './Header';

function Notebook() {
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
                                    src="../src/img/img-Notebook-1.jpg"
                                    alt="Notebook Samsung Galaxy Book Go"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">Notebook Samsung Galaxy Book Go</h3>
                                <div className="product-price">R$1.699,00</div>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img
                                    src="../src/img/img-Notebook-3.jpg"
                                    alt="Notebook ASUS Vivobook E510"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">Notebook Alienware M18 R2</h3>
                                <div className="product-price">R$35.599,00</div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="product-card">
                            <div className="product-image">
                                <img
                                    src="../src/img/img-Notebook-2.jpg"
                                    alt="Notebook Alienware M18 R2"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">Notebook ASUS Vivobook E510</h3>
                                <div className="product-price">R$1.859,07</div>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img
                                    src="../src/img/img-Notebook-4.jpg"
                                    alt="Notebook Apple MacBook Air"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">Notebook Apple MacBook Air</h3>
                                <div className="product-price">R$8.499,00</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
        <Footer/>
        </>
    );
}

export default Notebook;
