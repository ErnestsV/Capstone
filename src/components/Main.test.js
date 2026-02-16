import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns expected initial available times', () => {
  expect(initializeTimes()).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns the same state value for unsupported actions', () => {
  const state = ['17:00', '18:00', '19:00'];
  expect(updateTimes(state, { type: 'unknown_action' })).toEqual(state);
});
