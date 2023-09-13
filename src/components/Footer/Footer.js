import React from 'react';
import style from "./footer.module.css"

function Footer() {
    return (
        <footer className={style.footer}>
        <div className={style.footerContent}>
          <h2>Diego Bolívar</h2>
          <h5>Full Stack Developer</h5>
        </div>
        <div class="sotial-networks">
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-twitter-square"></i>
        </div>
      </footer>
    );
}

export default Footer;