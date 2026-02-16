import logo from '../assets/Logo.svg';
import Menu from './Menu';

function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#home" aria-label="Little Lemon home">
          <img className="site-header__logo" src={logo} alt="Little Lemon" />
        </a>
        <Menu />
      </div>
    </header>
  );
}

export default Header;
