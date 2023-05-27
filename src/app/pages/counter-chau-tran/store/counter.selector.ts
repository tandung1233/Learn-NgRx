// Bước 3
// Đây là file chứa các selector trong ngRx, được sử dụng để truy cập state từ store.
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';

// reducer được sử dụng để thay đổi state, còn selector được sử dụng để truy cập và đọc giá trị từ state trong store
// createFeatureSelector và createSelector là các hàm được import từ @ngrx/store để tạo ra các selector mới.
export const selectCounter = createFeatureSelector<CounterState>('counter');

// store của mình là 1 cục object duy nhất và bên trong có nhiều phân mảnh ví dụ: count: {},auth: {}, products: {} count củng là 1 phân mảnh
// selectValue, selectIncrementCount và selectDecrementCount là các selector để chọn các giá trị cụ thể từ state của counter, như value, incrementCount, và decrementCount.
export const selectValue = createSelector(
  // selectCounter là một selector để chọn phần state của counter.
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