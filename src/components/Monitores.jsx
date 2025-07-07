import React from 'react'
import "../Css/Produtos.css"
import Header from './Header';

function Monitores() {
  return (
     <main className="main">
            <Header />
            <div className="container">
                <div className="products-grid">
                    <div >
                        <div className="product-card">
                            <div className="product-image">
                                <img
                                    src="../src/img/img-Monitores-1.jpg"
                                    alt="Monitor Acer Ultra-Thin 23,8"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">Monitor Acer Ultra-Thin 23,8"</h3>
                                <div className="product-price">R$629,10</div>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img
                                    src="../src/img/img-Monitores-2.jpg"
                                    alt="CRUA Monitor Curvo"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">CRUA Monitor Curvo</h3>
                                <div className="product-price">R$1.237,87</div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="product-card">
                            <div className="product-image">
                                <img
                                    src="../src/img/img-Monitores-3.jpg"
                                    alt="Monitor LG 19.5 LED HDMI"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">Monitor LG 19.5 LED HDMI</h3>
                                <div className="product-price">R$420,00</div>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img
                                    src="../src/img/img-Monitores-4.jpg"
                                    alt="Monitor 21.5 Hq"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">Monitor 21.5 Hq</h3>
                                <div className="product-price">R$390,15</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
  )
}

export default Monitores