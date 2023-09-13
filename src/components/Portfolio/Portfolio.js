import React from "react";
import Cards from "../Cards/Cards";
import style from "./portfolio.module.css";

function Portfolio() {
  
  return (
    <seccion id="portfolio">
      <div className={style.portfolioSection}>
        <div className={style.background}></div>

        <div className={style.portfolioHeadings}>
          <div>
            <h2>My Portfolio</h2>
            <div className={style.divider}></div>
          </div>

          <div className={style.container}>
            <Cards />
           
          </div>
        </div>
      </div>
    </seccion>
  );
}

export default Portfolio;
