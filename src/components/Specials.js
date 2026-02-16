import greekSaladImage from '../assets/greek salad.jpg';
import bruschettaImage from '../assets/restaurant.jpg';
import lemonDessertImage from '../assets/lemon dessert.jpg';

const specialItems = [
  {
    title: 'Greek salad',
    price: '$12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: greekSaladImage,
    alt: 'Greek salad with tomatoes, olives, feta and peppers'
  },
  {
    title: 'Bruschetta',
    price: '$ 5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: bruschettaImage,
    alt: 'Bruschetta served on a plate'
  },
  {
    title: 'Lemon Dessert',
    price: '$ 5.00',
    description:
      'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image: lemonDessertImage,
    alt: 'Slice of lemon dessert on a plate'
  }
];

function Specials() {
  return (
    <section className="specials" id="specials" aria-labelledby="specials-title">
      <div className="container">
        <div className="specials__header">
          <h2 id="specials-title" className="specials__title">
            This weeks specials!
          </h2>
          <a className="button button--primary" href="#order-online" aria-label="View the online menu">
            Online Menu
          </a>
        </div>

        <div className="specials__grid" role="list" aria-label="Weekly specials">
          {specialItems.map((item) => (
            <article key={item.title} className="special-card" role="listitem" aria-label={item.title}>
              <img className="special-card__image" src={item.image} alt={item.alt} />
              <div className="special-card__content">
                <div className="special-card__heading-row">
                  <h3 className="special-card__title">{item.title}</h3>
                  <p className="special-card__price" aria-label={`${item.title} price ${item.price}`}>
                    {item.price}
                  </p>
                </div>
                <p className="special-card__description">{item.description}</p>
                <a className="special-card__order-link" href="#order-online" aria-label={`Order ${item.title} for delivery`}>
                  Order a delivery
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
