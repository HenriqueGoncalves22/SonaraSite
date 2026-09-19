import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function NavbarComponent(){

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  
  useEffect(() => {
    setMenuOpen(false);
    }, [location.pathname]);

    return(
     <header>
        <nav className={styles.navbar}>
          <Link to="/"><img src="assets/logo.png" /></Link>
          <button id={styles.btnMenu} onClick={() => setMenuOpen(!menuOpen)}><FontAwesomeIcon icon={faBars}/></button>
          <ul className={`${styles.navMenu} ${menuOpen ? styles.menuOpen : ""}`} onClick={() => setMenuOpen(false)}>
            <button id={styles.menuClose}><FontAwesomeIcon icon={faX}  /></button>
            <li><Link to="/cursos">Cursos</Link></li>
            <li><Link to="/eventos">Eventos</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/quem-somos">Quem Somos</Link></li>
          </ul>
        </nav>
     </header>
    );
}
export default NavbarComponent;