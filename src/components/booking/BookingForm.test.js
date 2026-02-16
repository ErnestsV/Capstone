import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders BookingForm static label text', () => {
  render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={jest.fn()} />);
  const dateLabel = screen.getByText('Choose date');
  expect(dateLabel).toBeInTheDocument();
});
