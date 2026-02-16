import adrianPhoto from '../assets/Mario and Adrian A.jpg';
import marioPhoto from '../assets/Mario and Adrian b.jpg';

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="container about__content">
        <div className="about__text">
          <h2 id="about-title" className="about__title">
            Little Lemon
          </h2>
          <p className="about__subtitle">Chicago</p>
          <p className="about__description">
            Little Lemon is a family-owned Mediterranean restaurant rooted in traditional recipes and warm
            hospitality. Our founders, Adrian and Mario, bring personality and creativity into every dish.
          </p>
        </div>
        <div className="about__images" aria-hidden="true">
          <img className="about__image about__image--front" src={adrianPhoto} alt="" />
          <img className="about__image about__image--back" src={marioPhoto} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
