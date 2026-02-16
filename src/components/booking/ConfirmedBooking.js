import { Link } from 'react-router-dom';
import './booking.css';

function ConfirmedBooking() {
  return (
    <main id="main-content" role="main" className="booking-page" aria-labelledby="confirmed-booking-title">
      <section className="booking-hero">
        <div className="container booking-hero__content">
          <h1 id="confirmed-booking-title" className="booking-page__title">
            Booking Confirmed!
          </h1>
          <p className="booking-page__lead">
            Your reservation has been received. We look forward to welcoming you at Little Lemon.
          </p>
          <Link className="button button--primary" to="/booking" aria-label="Make another reservation">
            Make Another Reservation
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ConfirmedBooking;
