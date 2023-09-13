import React from "react";
import henry from "../../img/henry.png";
import style from "./about.module.css";

function About() {
  return (
    <section id="about">
      <div className={style.about}>
        <div className={style.headings}>
          <h2>About me</h2>
          <div className={style.divider}></div>
        </div>
        <div className={style.con}>
          <img
            src={henry}
            alt="certificado"
          />
          <div className={style.info}>
            <p>
              Aqui estudie a más profundidad, adquirí herramientas que me
              ayudaran a plasmar soluciones e ideas en la web. También, me han
              brindado una linea de aprendizajes para avanzar con el
              conocimiento.
            </p>
            <br />
            <br />
            <p>
              Java script, React, Redux, Express, Node, PostgreSQL, son las
              herramientas que se apropian para desarrollar en front y back
              darán por culminada a través de un proyecto grupal. En él
              participe junto a siete integrantes, realizamos una pagina
              dirigida a la buena alimentación y el público vegano.
            </p>
          </div>
        </div>
     </div>
    </section>
  );
}

export default About;
