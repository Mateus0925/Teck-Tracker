import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Css/Header.css';

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

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

    btn?.addEventListener('click', handleDropdownClick);
    overlay?.addEventListener('click', closeDropdown);

    return () => {
      btn?.removeEventListener('click', handleDropdownClick);
      overlay?.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <>
      <header className={isHome ? 'header-home' : 'header-padrao'}>
        <a href="#">
          <img 
            src={
              isHome
                ? '../src/img/Logo-TechTracker.svg'
                : '../src/img/Logo-TechTracker.svg'
            }
            alt="Logo"
          />
        </a>

        <nav>
          <div className="espacamento">
            <a className="navbar-a" href="/">Início</a>

            <div className="dropdown-wrapper">
              <a
                id="produtos-btn"
                ref={produtosBtnRef}
                className="navbar-a"
                href="#"
              >
                Produtos
              </a>
              <nav
                id="dropdown-menu"
                className="dropdown-menu"
                ref={dropdownMenuRef}
              >
                <a href="#">Monitores &gt;</a>
                <a href="#">Gabinetes &gt;</a>
                <a href="#">Teclados &gt;</a>
                <a href="#">Mouses &gt;</a>
                <a href="#">Projetores &gt;</a>
              </nav>
            </div>

            <a className="navbar-a" href="#">Novidades</a>
          </div>
          <a className="navbar-a" href="#">Contatos</a>
        </nav>
      </header>

      <div id="overlay" ref={overlayRef}></div>
    </>
  );
}

export default Header;
