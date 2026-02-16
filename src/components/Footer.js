import logo from '../assets/Logo.svg';

const navLinks = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];
const socialLinks = ['Instagram', 'Facebook', 'YouTube', 'X'];

function Footer() {
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="container site-footer__content">
        <div className="site-footer__logo-wrap">
          <img className="site-footer__logo" src={logo} alt="Little Lemon" />
        </div>

        <section className="site-footer__column" aria-labelledby="footer-nav-title">
          <h2 id="footer-nav-title" className="site-footer__heading">
            Doormat Navigation
          </h2>
          <ul className="site-footer__list">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="site-footer__column" aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title" className="site-footer__heading">
            Contact
          </h2>
          <address className="site-footer__address">
            <p>123 Lemon Street, Chicago, IL</p>
            <p>
              <a href="tel:+13125551234">(312) 555-1234</a>
            </p>
            <p>
              <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
            </p>
          </address>
        </section>

        <section className="site-footer__column" aria-labelledby="footer-social-title">
          <h2 id="footer-social-title" className="site-footer__heading">
            Social Media Links
          </h2>
          <ul className="site-footer__list">
            {socialLinks.map((network) => (
              <li key={network}>
                <a href="#social" aria-label={`Visit Little Lemon on ${network}`}>
                  {network}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
