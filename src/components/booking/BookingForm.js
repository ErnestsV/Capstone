import { useEffect, useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0] || '');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!availableTimes.includes(time)) {
      setTime(availableTimes[0] || '');
    }
  }, [availableTimes, time]);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    dispatch({ type: 'date_change', date: selectedDate });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!time) {
      setErrorMessage('No time slots are currently available.');
      return;
    }

    const formData = { date, time, guests, occasion };
    const isSubmitted = submitForm(formData);

    if (!isSubmitted) {
      setErrorMessage('Unable to submit reservation. Please try again.');
      return;
    }

    setErrorMessage('');
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-label="Table reservation form">
      <div className="booking-form__field">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="res-date"
          value={date}
          min={new Date().toISOString().split('T')[0]}
          onChange={handleDateChange}
          required
        />
      </div>

      <div className="booking-form__field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="res-time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          required
        >
          {availableTimes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="booking-form__field">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={guests}
          min="1"
          max="10"
          onChange={(event) => {
            const value = Number(event.target.value);
            setGuests(Number.isNaN(value) || value < 1 ? 1 : value);
          }}
          required
        />
      </div>

      <div className="booking-form__field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button className="button button--primary booking-form__submit" type="submit" disabled={!time}>
        Submit reservation
      </button>

      {errorMessage ? (
        <p className="booking-form__error" role="status" aria-live="polite">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}

export default BookingForm;
