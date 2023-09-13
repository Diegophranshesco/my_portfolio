import React from "react";
import style from "./card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <div className={style.card_con}>
     
        <h3>{props.title}</h3>

        <div className={style.divider}></div>
        <p>{props.description}</p>

        <video video="true" width="360" height="220" controls autoPlay="true" muted>
          <source src={props.video} type="video/mp4" />
        </video>
      </div>
      <div className={style.card_projectsLinks} key={props.id}>
        <a href={props.links[0].url1} target="_blank" rel="noopener noreferrer">
          <img src={props.links[0].Image1} alt={props.title} />
        </a>

        <a href={props.links[1].url2} target="_blank" rel="noopener noreferrer">
          <img src={props.links[1].Image2} alt={props.title} />
        </a>

        {props.links[2] && (
          <a href={props.links[2].url3} target="_blank" rel="noopener noreferrer">
            <img src={props.links[2].Image3} alt={props.title} />
          </a>
        )}
      </div>
    </div>

    // </div>
  );
};

export default Card;
