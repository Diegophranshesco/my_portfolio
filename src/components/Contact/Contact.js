import  React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import style from "./contact.module.css"

function Contact() {

  const refForm = useRef();

  const handleSumit = (event) => {
    event.preventDefault();

    const serviceId = "service_2ns256p";
    const templateId = "template_2pdjgcp";

    const apikey ="hm5xNVFvnE83YYKnf";

    emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
    .then( result => alert("Tu mensaje para Diego Bolivar  se a enviado correctamente Gracias" ))
    .catch (error => alert(error))

  }
    return (
        <div id="contact">
               <div  className={style.contact}>
      <div className={style.contactHeading}>
        <h2>Contacto</h2>
        <div className={style.divider}></div>
      </div>
      <div className={style.contactSection}>
        <div className={style.containerContact}>        
          <div className={style.contactForm}>
            <h4>Envíeme un mensaje... </h4>
            <form className={style.formGroup} ref={refForm} action='' onSubmit={handleSumit}>
              <input type="text" id="name" name="username" className={style.input}  placeholder="Name"required />
              <input type="email" id="email" name="email" className={style.input} placeholder="Email" required />
              <textarea
              id="mensaje" name="message"
                placeholder="Place your message here..." required
              ></textarea>
              <button type="submit" className={style.btnSubmit}>Enviar mensaje</button>
            </form>
          </div>
        </div> 
      </div>
    </div>
        </div>
    );
}

export default Contact;
