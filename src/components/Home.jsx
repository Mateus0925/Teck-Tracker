import React, { useEffect, useRef } from 'react';
import PalavraAnimada from './PalavraAnimada';
import "../Css/index.css"

function Home() {
    const produtosBtnRef = useRef(null);
    const dropdownMenuRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const handleDropdownClick = (e) => {
            e.preventDefault();
            const dropdownMenu = dropdownMenuRef.current;
            const overlay = overlayRef.current;
            const isOpen = dropdownMenu.classList.contains('show');

            if (isOpen) {
                dropdownMenu.classList.remove('show');
                overlay.style.display = 'none';
            } else {
                dropdownMenu.classList.add('show');
                overlay.style.display = 'block';
            }
        };

        const closeDropdown = () => {
            dropdownMenuRef.current.classList.remove('show');
            overlayRef.current.style.display = 'none';
        };

        const btn = produtosBtnRef.current;
        const overlay = overlayRef.current;

        btn.addEventListener('click', handleDropdownClick);
        overlay.addEventListener('click', closeDropdown);

        return () => {
            btn.removeEventListener('click', handleDropdownClick);
            overlay.removeEventListener('click', closeDropdown);
        };
    }, []);

    return (
        <>
            <div className="fundo">
                <section className="Pagina-Principal">
                    <div className="Pagina-Principal-organizao-coluna">
                        <div className="Pagina-Principal-1-titulo">
                            <h1>Maximize sua produtividade com os nossos equipamentos</h1>
                        </div>
                        <div className="Pagina-Principal-2-titulo">
                            <h1>Simplificamos sua vida com</h1> <PalavraAnimada/>
                        </div>
                        <button style={{cursor:"pointer"}}>
                            ALUGUE AQUI
                            <img src="../src/img/Collapse Arrow.png" alt="Seta" />
                        </button>
                    </div>
                </section>
            </div>


            <div id="overlay" ref={overlayRef}></div>
        </>
    );
}

export default Home;
