import React from 'react'
import "../Css/Footer.css"

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="contact-icons">
          <a href="mailto:contato@techtracker.com" target="_blank" rel="noopener noreferrer">
            <img src="../src/img/gmail.png" alt="Email" />
          </a>
          <a href="tel:+5511999999999" target="_blank" rel="noopener noreferrer">
            <img src="../src/img/telefone.png" alt="Telefone" />
          </a>
          <a href="https://instagram.com/techtracker" target="_blank" rel="noopener noreferrer">
            <img src="../src/img/instagram.png" alt="Instagram" />
          </a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            <img src="../src/img/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>
        <div className='bloco-footer'>
          <div className='organizacao-footer'>
            <div className='espacamento-footer'>
              <p className='paragrafo-footer'>Razão Social: Tech Tracker S/A</p>
              <p className='paragrafo-footer'>CNPJ: 00.000.000/0001-00</p>
            </div>
            <div>
              <p className='paragrafo-footer'>Política e Privacidade</p>
              <p className='paragrafo-footer'>@2025. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
