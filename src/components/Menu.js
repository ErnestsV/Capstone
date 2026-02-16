import { Link } from 'react-router-dom';

const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Menu', to: '/#specials' },
  { label: 'Reservations', to: '/booking' },
  { label: 'Order Online', to: '/#order-online' },
  { label: 'Login', to: '/#login' }
];

function Menu() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <ul className="site-nav__list">
        {menuItems.map((item) => (
          <li key={item.label} className="site-nav__item">
            <Link className="site-nav__link" to={item.to}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
