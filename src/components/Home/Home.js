import React from "react";
import foto from "../../img/foto.png";
import style from "./home.module.css";

{
  /* <h1>Bienvenido a mi Portafolio</h1> 
<p>¡Hola! Soy Diego Bolivar un desarrolladorjr ful stack en busca de nuevos retos y aprendisajes</p>                */
}
function Home() {
  return (
    <div id="home">
      <div className={style.wrapper}>
        <main className={style.main}>
          <div className="info-content">
            <h1>
              Diego <span>Bolivar</span>
            </h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>Mucho gusto</h2>
           
            
            
            <br/>
            <h3>Bienvenido a mi Portafolio</h3>
         
            <p>
              Me presento soy full stack jr comienzo con HTML, CSS, Java Script
              realizo un contador de clics también una calculadora, estoy mirando
              lenguajes como Java y PHP de los cuales tengo lo básico, pero deseo comenzar agregar al portafolio proyectos con estos lenguajes. 
            </p>
            <br/>
            <p>
            No dejo de adquirir experiencia, realizando proyectos con Java Script
              donde te quiero invitar para que me digas que tal pues son los 
              quiero mostrar para comenzar mi vida laboral como programador si te puedo colaborar en algún proyecto que tengas, no dudes en contactarme 
            </p>
            {/* <a download href="#">
              <button >Descargar CV</button>
            </a> */}
          </div>
          <img className={style.foto}
            src={foto}
            alt="Diego"
          />
        </main>
      </div>
    </ div>
  );
}

export default Home;
