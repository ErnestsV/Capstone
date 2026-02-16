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

test('updateTimes returns the same state value for unsupported actions', () => {
  const state = ['17:00', '18:00', '19:00'];
  expect(updateTimes(state, { type: 'unknown_action' })).toEqual(state);
});

test('updateTimes returns available times from API when date changes', () => {
  const mockTimes = ['20:00', '21:00'];
  fetchAPI.mockReturnValue(mockTimes);
  const currentState = ['17:00', '18:00', '19:00'];

  expect(updateTimes(currentState, { type: 'date_change', date: '2026-03-10' })).toEqual(mockTimes);
  expect(fetchAPI).toHaveBeenCalledTimes(1);
  expect(fetchAPI.mock.calls[0][0]).toBeInstanceOf(Date);
});
