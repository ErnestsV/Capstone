import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../api';
import Hero from './Hero';
import Specials from './Specials';
import About from './About';
import BookingPage from './booking/BookingPage';

const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

function parseDateValue(dateValue) {
  if (dateValue instanceof Date) {
    return dateValue;
  }

  if (typeof dateValue === 'string' && dateValue) {
    const [year, month, day] = dateValue.split('-').map(Number);

    if (year && month && day) {
      return new Date(year, month - 1, day);
    }
  }

  return new Date();
}

function getAvailableTimesFromApi(dateValue) {
  const parsedDate = parseDateValue(dateValue);

  if (typeof fetchAPI === 'function') {
    return fetchAPI(parsedDate);
  }

  return defaultTimes;
}

export function initializeTimes() {
  return getAvailableTimesFromApi(new Date());
}

export function updateTimes(state, action) {
  if (action.type === 'date_change') {
    return getAvailableTimesFromApi(action.date);
  }

  if (action.type === 'reserve') {
    return state.filter((time) => time !== action.time);
  }

  return state;
}

function Main({ isBookingPage = false }) {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      dispatch({ type: 'reserve', time: formData.time });
      navigate('/booking/confirmed');
      return true;
    }

    return false;
  };

  if (isBookingPage) {
    return <BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />;
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
