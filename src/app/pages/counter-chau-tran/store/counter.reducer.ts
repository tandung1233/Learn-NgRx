// Bước 2: ví dụ mình có cái state reducer này sẽ nhận vào 1 cái action mới và state hiện và retrun cais state mới
// Mai rảnh comment tiếp
import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.action';

// => Tóm lại update state của mình
export interface CounterState {
  value: number;
  incrementCount: number;
  decrementCount: number;
}
export const initiaState: CounterState = {
  decrementCount: 0,
  incrementCount: 0,
  value: 1,
};
export const countReducer = createReducer(
  initiaState,
  on(increment, (state) => ({
    ...state,
    value: state.value + 1,
    incrementCount: state.incrementCount + 1,
  })),
  on(decrement, (state) => ({
    ...state,
    value: state.value - 1,
    decrementCount: state.decrementCount + 1,
  }))
);
