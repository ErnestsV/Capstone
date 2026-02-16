import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ConfirmedBooking from './components/booking/ConfirmedBooking';

function App() {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<Main isBookingPage />} />
        <Route path="/booking/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
