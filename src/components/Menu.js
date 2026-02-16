const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#specials' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'Order Online', href: '#order-online' },
  { label: 'Login', href: '#login' }
];

function Menu() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <ul className="site-nav__list">
        {menuItems.map((item) => (
          <li key={item.label} className="site-nav__item">
            <a className="site-nav__link" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
