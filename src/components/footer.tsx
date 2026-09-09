import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import logo from "../../public/assets/logo.png";

function FooterComponent(){
    return(
        <>
  <footer>
          <img src="../../../public/assets/logo.png" alt="" id={styles.logoFooter}/>
          <div id={styles.contactFooter}>
            <h4>Contato</h4>
            <ul>
              <li>Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200</li>
              <li>(11)99999-9999</li>
              <li>contato@sonara.com</li>
              <li>Atendimento Segunda a Sexta | 08:00 - 17:00</li>
            </ul>
          </div>
          <div id={styles.menuFooter}>
            <h4>Institucional</h4>
            <ul>
              <li><a href="">Quem Somos</a></li>
              <li><a href="">Eventos</a></li>
              <li><a href="">Trabalhe Conosco</a></li>
            </ul>
          </div>
          <div id={styles.socialMediaFooter}>
             <h4>Redes Sociais</h4>
              <a href="https://www.instagram.com/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.facebook.com/" target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://www.linkedin.com/" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        <p id={styles.copyrightFooter}>©Todos Direitos Reservados por Sonara </p>
     </footer>
     </>
    );
}

export default FooterComponent;