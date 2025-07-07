import React from 'react';
import '../Css/Cadastro.css';

function Cadastro() {
    return (
        <div className="pagina-cadastro">
            <div className="cadastro-container">
                <div className="cadastro-titulo">
                    <h1>
                        Cadastre-se <strong className="asterisco">*</strong>
                    </h1>
                </div>

                <div className="cadastro-campo">
                    <h2>
                        Nome <strong className="asterisco">*</strong>
                    </h2>
                    <input type="text" className="campo-input" />
                </div>

                <div className="cadastro-campo">
                    <h2>
                        Email <strong className="asterisco">*</strong>
                    </h2>
                    <input type="text" className="campo-input" />
                </div>

                <div className="cadastro-campo">
                    <h2>
                        CPF/CNP <strong className="asterisco">*</strong>
                    </h2>
                    <input type="text" className="campo-input" />
                </div>

                <div className="cadastro-campo">
                    <h2>
                        Endereço <strong className="asterisco">*</strong>
                    </h2>
                    <input type="text" className="campo-input" />
                </div>

                <div className="cadastro-campo">
                    <h2>Mensagem</h2>
                    <textarea className="campo-textarea" cols="30" rows="10"></textarea>
                </div>

                <button className="cadastro-botao">Cadastrar</button>
            </div>
        </div>
    )
}

export default Cadastro;
