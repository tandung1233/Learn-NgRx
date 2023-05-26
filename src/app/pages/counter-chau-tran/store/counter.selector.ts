import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';

//reducer là cách để write và cái selector này để read
export const selectCounter = createFeatureSelector<CounterState>('counter');

// store của mình là 1 cục object duy nhất và bên trong có nhiều phân mảnh ví dụ: count: {},auth: {}, products: {} count củng là 1 phân mảnh
export const selectValue = createSelector(
  selectCounter,
  (counterState) => counterState.value
);
export const selectIncrementCount = createSelector(
  selectCounter,
  (counterState) => counterState.incrementCount
);
export const selectDecrementCount = createSelector(
  selectCounter,
  (counterState) => counterState.decrementCount
);