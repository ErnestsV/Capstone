import heroImage from '../assets/restauranfood.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero__content">
        <div className="hero__text">
          <h1 id="hero-title" className="hero__title">
            Little Lemon
          </h1>
          <p className="hero__subtitle">Chicago</p>
          <p className="hero__description">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern
            twist.
          </p>
          <Link className="button button--primary" to="/booking" aria-label="Reserve a table at Little Lemon">
            Reserve a Table
          </Link>
        </div>
        <div className="hero__image-wrapper">
          <img className="hero__image" src={heroImage} alt="Chef presenting bruschetta appetizers" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
