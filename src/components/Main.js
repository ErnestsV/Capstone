import { useReducer } from 'react';
import Hero from './Hero';
import Specials from './Specials';
import About from './About';
import BookingPage from './BookingPage';

const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

export function initializeTimes() {
  return defaultTimes;
}

export function updateTimes(state, action) {
  if (action.type === 'date_change') {
    // For now, return the same available times regardless of date.
    return initializeTimes(action.date);
  }

  if (action.type === 'reserve') {
    return state.filter((time) => time !== action.time);
  }

  return state;
}

function Main({ isBookingPage = false }) {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  if (isBookingPage) {
    return <BookingPage availableTimes={availableTimes} dispatch={dispatch} />;
  }

  return (
    <main id="main-content" role="main">
      <Hero />
      <Specials />
      <About />
    </main>
  );
}

export default Main;
