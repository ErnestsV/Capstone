import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import Menu from './Menu';

function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container site-header__inner">
        <Link className="site-header__brand" to="/" aria-label="Little Lemon home">
          <img className="site-header__logo" src={logo} alt="Little Lemon" />
        </Link>
        <Menu />
      </div>
    </header>
  );
}

export default Header;
