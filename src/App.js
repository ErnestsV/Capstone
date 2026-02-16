import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
