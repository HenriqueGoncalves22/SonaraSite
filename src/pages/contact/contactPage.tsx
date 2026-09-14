import styles from "./contactStyle.module.css";
import ContactForm from "./contactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {

  return (
    <section id={styles.contact}>
      <header id={styles.contactHero}>
        <h2>Fale Conosco</h2>
      </header>
      <div id={styles.contactContent}>
        <ContactForm />
        <div id={styles.contactInfo}>
          <div>
            <h4>Telefone</h4>
            <p>(11) 99999-9999 </p>
          </div>
          <div>
            <h4>E-mail</h4>
            <p>contato@sonara.com</p>
          </div>
          <div>
            <h4>Horário de Atendimento</h4>
            <p> Segunda a Sexta - 08:00 às 17:00 </p>
          </div>
          <div>
            <h4>Endereço</h4>
            <p> Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200</p>
          </div>
        </div>
      </div>
      <section id={styles.mapSection}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1941483267256!2d-46.658529923718696!3d-23.561469628799745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c94ae1f7c5%3A0xe96bbcfef4fab736!2sAv.%20Paulista%2C%201578%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-200!5e0!3m2!1spt-BR!2sbr!4v1789320431417!5m2!1spt-BR!2sbr" width="1000" height="500" style={{ border: '0', width: '100vw' }} ></iframe>
      </section>
      <section id={styles.social}>
        <h2>Continue acompanhando a Sonara</h2>
        <p> Acompanhe novidades, eventos e conteúdos relacionados ao mundo da música.</p>
        <div className={styles.socialLinks}>
          <a href="https://www.instagram.com/" target='_blank'><FontAwesomeIcon icon={faInstagram} />Instagram</a>
          <a href="https://www.facebook.com/" target='_blank'><FontAwesomeIcon icon={faFacebook} />Facebook</a>
          <a href="https://www.linkedin.com/" target='_blank'><FontAwesomeIcon icon={faLinkedin} />Linkedin</a>
        </div>
      </section>
    </section>
  );
}

export default Contact;