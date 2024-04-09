import {} from 'react';
/* LINK CHAMA COMPONENTES */
import { Link } from 'react-router-dom';
/* CHAMANDO O ESTILO CSS*/
import '.././estilo.css';

function Nav() {
  return (
    /*SECTION COM A CLASSE NAV */
    <header className="menu">
      <nav className="nav-menu">
        <ul>
          <Link to="/home" className="link">Home</Link>
          <Link to="/Login" className="link">Login</Link>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
