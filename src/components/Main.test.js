import { initializeTimes, updateTimes } from './Main';
import { fetchAPI } from '../api';

jest.mock('../api', () => ({
  fetchAPI: jest.fn()
}));

afterEach(() => {
  jest.clearAllMocks();
});

test('initializeTimes returns available times from API for today', () => {
  const mockTimes = ['17:00', '18:00'];
  fetchAPI.mockReturnValue(mockTimes);

  expect(initializeTimes()).toEqual(mockTimes);
  expect(fetchAPI).toHaveBeenCalledTimes(1);
  expect(fetchAPI.mock.calls[0][0]).toBeInstanceOf(Date);
});

test('updateTimes returns available times from API for the selected date', () => {
  const mockTimes = ['20:00', '21:00'];
  fetchAPI.mockReturnValue(mockTimes);
  const currentState = ['17:00', '18:00', '19:00'];
  const selectedDate = new Date(2026, 2, 10);

  expect(updateTimes(currentState, { type: 'date_change', date: selectedDate })).toEqual(mockTimes);
  expect(fetchAPI).toHaveBeenCalledTimes(1);
  expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
});
