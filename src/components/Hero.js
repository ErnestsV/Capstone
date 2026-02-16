import heroImage from '../assets/restauranfood.jpg';

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
          <a className="button button--primary" href="#reservations" aria-label="Reserve a table at Little Lemon">
            Reserve a Table
          </a>
        </div>
        <div className="hero__image-wrapper">
          <img className="hero__image" src={heroImage} alt="Chef presenting bruschetta appetizers" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
