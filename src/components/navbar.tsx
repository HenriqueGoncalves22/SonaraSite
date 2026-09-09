import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../../public/assets/logo.png";

function NavbarComponent(){
    return(
     <header>
        <nav className={styles.navbar}>
          <Link to="/"><img src="../../public/assets/logo.png" /></Link>
          <ul>
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