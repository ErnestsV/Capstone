function BookingSlot({ time, status }) {
  return (
    <li className={`booking-slot booking-slot--${status}`}>
      <span className="booking-slot__time">{time}</span>
      <span className="booking-slot__status">{status === 'available' ? 'Available' : 'Booked'}</span>
    </li>
  );
}

export default BookingSlot;
