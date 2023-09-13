import React from "react";
import style from "./header.module.css";

function Header() {
    return (
        <header>
        <nav className={style.navbar}>
          <div className={style.brand}>
            <h2>Diego <span>Bolívar</span></h2>
          </div>
          <ul className={style.menu}>
            <li><a className={style.active} href="#home">Hogar</a></li>
            <li><a href="#about">Acerca de mí</a></li>
            <li><a href="#portfolio">Portafolio</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;