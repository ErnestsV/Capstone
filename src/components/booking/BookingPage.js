import BookingForm from './BookingForm';
import BookingSlotsList from './BookingSlotsList';
import './booking.css';

const bookedSlots = ['18:30', '20:30'];

function BookingPage({ availableTimes, dispatch }) {
  return (
    <main id="main-content" role="main" className="booking-page" aria-labelledby="booking-page-title">
      <section className="booking-hero">
        <div className="container booking-hero__content">
          <h1 id="booking-page-title" className="booking-page__title">
            Reserve a Table
          </h1>
          <p className="booking-page__lead">
            Choose your date, time and party details below to complete your reservation.
          </p>
        </div>
      </section>

      <section className="booking-section" aria-label="Reservation details">
        <div className="container booking-section__content">
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} />

          <div className="booking-section__lists">
            <BookingSlotsList title="Available Slots" status="available" times={availableTimes} />
            <BookingSlotsList title="Booked Slots" status="booked" times={bookedSlots} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default BookingPage;
