import React from 'react'
import "../Css/Produtos.css"
import Header from './Header';

function Gabinete() {
  return (
    <main className="main">
            <Header />
            <div className="container">
                <div className="products-grid">
                    <div >
                        <div className="product-card">
                            <div className="product-image">
                                <img
                                    src="../src/img/img-Gabinete-1.jpg"
                                    alt="Desktop XPS"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">Desktop XPS</h3>
                                <div className="product-price">R$10.199,00</div>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img
                                    src="../src/img/img-Gabinete-2.jpg"
                                    alt="Workstation em torre Precision 5860"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">Workstation em torre Precision 5860</h3>
                                <div className="product-price">R$17.999,00</div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="product-card">
                            <div className="product-image">
                                <img
                                    src="../src/img/img-Gabinete-3.jpg"
                                    alt="Desktop OptiPlex Micro"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">Desktop OptiPlex Micro</h3>
                                <div className="product-price">R$3.599,00</div>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img
                                    src="../src/img/img-Gabinete-4.jpg"
                                    alt="Inspiron Small Desktop"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">Inspiron Small Desktop</h3>
                                <div className="product-price">R$3.298,00</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
  )
}

export default Gabinete