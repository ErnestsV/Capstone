import BookingSlot from './BookingSlot';

function BookingSlotsList({ title, status, times }) {
  return (
    <section className="booking-slots" aria-label={title}>
      <h2 className="booking-slots__title">{title}</h2>
      {times.length > 0 ? (
        <ul className="booking-slots__list">
          {times.map((time) => (
            <BookingSlot key={`${status}-${time}`} time={time} status={status} />
          ))}
        </ul>
      ) : (
        <p className="booking-slots__empty">No slots in this list.</p>
      )}
    </section>
  );
}

export default BookingSlotsList;
