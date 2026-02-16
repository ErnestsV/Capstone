import { useEffect, useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0] || '');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('Birthday');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false
  });

  const guestsNumber = Number(guests);
  const isDateValid = Boolean(date) && date >= today;
  const isTimeValid = Boolean(time) && availableTimes.includes(time);
  const isGuestsValid = Number.isInteger(guestsNumber) && guestsNumber >= 1 && guestsNumber <= 10;
  const isOccasionValid = ['Birthday', 'Anniversary'].includes(occasion);
  const isFormValid = isDateValid && isTimeValid && isGuestsValid && isOccasionValid;
  const showDateError = (submitAttempted || touched.date) && !isDateValid;
  const showTimeError = (submitAttempted || touched.time) && !isTimeValid;
  const showGuestsError = (submitAttempted || touched.guests) && !isGuestsValid;
  const showOccasionError = (submitAttempted || touched.occasion) && !isOccasionValid;

  useEffect(() => {
    if (!availableTimes.includes(time)) {
      setTime(availableTimes[0] || '');
    }
  }, [availableTimes, time]);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    setErrorMessage('');
    setTouched((prev) => ({ ...prev, date: true }));
    dispatch({ type: 'date_change', date: selectedDate });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitAttempted(true);

    if (!isFormValid) {
      setErrorMessage('Please complete all fields with valid values.');
      return;
    }

    const formData = { date, time, guests: guestsNumber, occasion };
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
          min={today}
          onChange={handleDateChange}
          onBlur={() => setTouched((prev) => ({ ...prev, date: true }))}
          aria-invalid={showDateError}
          aria-describedby={showDateError ? 'res-date-error' : undefined}
          required
        />
        {showDateError ? (
          <p id="res-date-error" className="booking-form__field-error">
            Please choose a valid date.
          </p>
        ) : null}
      </div>

      <div className="booking-form__field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="res-time"
          value={time}
          onChange={(event) => {
            setTime(event.target.value);
            setErrorMessage('');
            setTouched((prev) => ({ ...prev, time: true }));
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, time: true }))}
          aria-invalid={showTimeError}
          aria-describedby={showTimeError ? 'res-time-error' : undefined}
          required
        >
          {availableTimes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {showTimeError ? (
          <p id="res-time-error" className="booking-form__field-error">
            Please select an available time.
          </p>
        ) : null}
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
          step="1"
          onChange={(event) => {
            setGuests(event.target.value);
            setErrorMessage('');
            setTouched((prev) => ({ ...prev, guests: true }));
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, guests: true }))}
          aria-invalid={showGuestsError}
          aria-describedby={showGuestsError ? 'guests-error' : undefined}
          required
        />
        {showGuestsError ? (
          <p id="guests-error" className="booking-form__field-error">
            Number of guests must be between 1 and 10.
          </p>
        ) : null}
      </div>

      <div className="booking-form__field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(event) => {
            setOccasion(event.target.value);
            setErrorMessage('');
            setTouched((prev) => ({ ...prev, occasion: true }));
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, occasion: true }))}
          aria-invalid={showOccasionError}
          aria-describedby={showOccasionError ? 'occasion-error' : undefined}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {showOccasionError ? (
          <p id="occasion-error" className="booking-form__field-error">
            Please select an occasion.
          </p>
        ) : null}
      </div>

      <button className="button button--primary booking-form__submit" type="submit" disabled={availableTimes.length === 0}>
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
