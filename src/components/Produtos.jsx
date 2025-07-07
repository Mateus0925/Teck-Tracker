import React from 'react';

function Produtos() {
  return (
    <main className="main">
      <div className="container">
        <div className="products-grid">

          <div className="product-card">
            <div className="product-image">
              <img 
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop" 
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
                src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop" 
                alt="Notebook ASUS Vivobook E510" 
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
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop" 
                alt="Notebook Alienware M18 R2" 
              />
            </div>
            <div className="product-info">
              <h3 className="product-title">Notebook Alienware M18 R2</h3>
              <div className="product-price">R$35.599,00</div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img 
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop" 
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
    </main>
  );
}

export default Produtos;
