// Bước 2: Ví dụ mình có cái state reducer này sẽ nhận vào 1 cái action mới và state hiện và retrun cái state mới
// Đây là file chứa reducer trong ngRx, được sử dụng để thay đổi state của ứng dụng dựa trên các action.
import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.action';

// => Tóm lại update state của mình
// CounterState là một interface mô tả cấu trúc của state của counter.
export interface CounterState {
  value: number;
  incrementCount: number;
  decrementCount: number;
}
// initiaState là một object đại diện cho trạng thái ban đầu của counter.
export const initiaState: CounterState = {
  decrementCount: 0,
  incrementCount: 0,
  value: 1,
};
// countReducer là reducer chính của counter, nhận vào các action và state hiện tại, trả về state mới sau khi thay đổi.
// createReducer là một hàm được import từ @ngrx/store để tạo reducer mới.
export const countReducer = createReducer(
  initiaState,
  // Hàm on(increment, ...) xác định khi nhận được action increment, state sẽ được cập nhật bằng cách tăng giá trị value lên 1 và tăng incrementCount lên 1.
  // on là một hàm được import từ @ngrx/store để xác định hành động (action) và cập nhật state tương ứng.
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
