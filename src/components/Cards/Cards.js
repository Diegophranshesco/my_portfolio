import React from "react";
import Card from "../Card/Card";
import video1 from "../../img/videos/video1.mp4";
import video2 from "../../img/videos/video2.mp4";
import video3 from "../../img/videos/video3.mp4";
import video4 from "../../img/videos/video4.mp4";
import video5 from "../../img/videos/video5.mp4";
import code from "../../img/code.png";
import github from "../../img/github.png";
import online from "../../img/online.png";
import style from "./cards.module.css";

function Cards() {
  const projects = [
    {
      id: 1,
      title: "Contador de clicks",
      description: "Es un proyecto donde practico mis inicios con React si quieres puedes visitarlo también esta el codigo en github",
      video: video2,

      links: [
        {
          Image1: github,
          url1: "https://github.com/DIEGOPHRANCHESCO",
        },
        {
          Image2: code,
          url2: "https://github.com/DIEGOPHRANCHESCO/clicks",
        },
        {
          Image3: online,
          url3: "https://diegophranchesco.github.io/clicks/",
        },
      ],
    },
    {
      id: 2,
      title: "Calculadora",
      description: "Aqui me concentro un poco mas en CSS y sigo practicando con React si quieres puedes visitarlo también esta el codigo en github",
      video: video5,
      links: [
        {
          Image1: github,
          url1: "https://github.com/DIEGOPHRANCHESCO",
        },
        {
          Image2: code,
          url2: "https://github.com/DIEGOPHRANCHESCO/calculadora",
        },
        {
          Image3: online,
          url3: "https://diegophranchesco.github.io/calculadora/",
        },
      ],
    },
    {
      id: 3,
      title: "Pokémon",
      description: "Este es un proyecto genial en estos momentos le estoy dando mejoras y pensando que agregarle para que permanezca la idea inicial",
      video: video1,
      links: [
        {
          Image1: github,
          url1: "https://github.com/DIEGOPHRANCHESCO",
        },
        {
          Image2: code,
          url2: "https://github.com/DIEGOPHRANCHESCO/pokemons",
        },
        {
          Image3: online,
          url3: "https://diegophranchesco.github.io/deploypoke/",
        },
      ],
    },

    {
      id: 4,
      title: "Video games",
      description: "Proxima pagina",
      video: video4,
      links: [
        {
          Image1: github,
          url1: "https://github.com/DIEGOPHRANCHESCO",
        },
        {
          Image2: code,
          url2: "https://github.com/DIEGOPHRANCHESCO/video_games",
        },
        {
          Image3: online,
          url3: "#",
        },
      ],
    },

    {
      id: 5,
      title: "Food",
      description: "Proxima pagina",
      video: video3,
      links: [
        {
          Image1: github,
          url1: "https://github.com/DIEGOPHRANCHESCO",
        },
        {
          Image2: code,
          url2: "https://github.com/DIEGOPHRANCHESCO/food2",
        },
        {
          Image3: online,
          url3: "#",
        },
      ],
    },
  ];

  return (
    <div className={style.container}>
      {projects.map((project) => (
        
          <Card
            id={project.id}
            key={project.id}
            title={project.title}
            description={project.description}
            video={project.video}
            links={project.links}
          />
        
      ))}
    </div>
  );
}

export default Cards;
