import React, { useState } from 'react';
import '../Css/Cadastro.css';
import Footer from './footer';
import Header from './Header';

function Cadastro() {


    const handleChange = (e) => {
        const campo = e.target.name;
        const newValue = e.target.value;


        setDataForm({
            ...dataForm,
            [campo]: newValue
        });
    };


    const [dataForm, setDataForm] = useState({
        name: '',
        email: '',
        cpfCnp: '',
        address: '',
        message: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados preenchidos:", dataForm)
    }


    return (
        <>
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
                        <input type="text" className="campo-input" name='name' value={dataForm.name} onChange={handleChange} />
                    </div>


                    <div className="cadastro-campo">
                        <h2>
                            Email <strong className="asterisco">*</strong>
                        </h2>
                        <input type="text" className="campo-input" name='email' value={dataForm.email} onChange={handleChange} />
                    </div>


                    <div className="cadastro-campo">
                        <h2>
                            CPF/CNP <strong className="asterisco">*</strong>
                        </h2>
                        <input type="text" className="campo-input" name='cpfCnp' value={dataForm.cpfCnp} onChange={handleChange} />
                    </div>


                    <div className="cadastro-campo">
                        <h2>
                            Endereço <strong className="asterisco">*</strong>
                        </h2>
                        <input type="text" className="campo-input" name='address' value={dataForm.address} onChange={handleChange} />
                    </div>


                    <div className="cadastro-campo">
                        <h2>Mensagem</h2>
                        <textarea className="campo-textarea" cols="30" rows="10" name='message' value={dataForm.message} onChange={handleChange}></textarea>
                    </div>


                    <button className="cadastro-botao" onClick={handleSubmit} type='button'>Cadastrar</button>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Cadastro;