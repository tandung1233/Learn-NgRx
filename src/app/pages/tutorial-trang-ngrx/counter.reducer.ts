// Bước 2 phải làm 
// Reducers là các hàm xử lý các action và cập nhật trạng thái của ứng dụng. 
// Chúng nhận vào hai tham số là trạng thái hiện tại của ứng dụng(state) và action, và dựa trên action đó để xác định cách thay đổi trạng thái của ứng dụng.
// Reducers giúp bạn quản lý trạng thái ứng dụng một cách cấu trúc, tách biệt logic xử lý action và UI components, và dễ dàng bảo trì và mở rộng mã nguồn.
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
// Đoạn code này định nghĩa một reducer cho thành phần Counter trong ứng dụng. Reducer là một hàm nhận vào hai tham số: state (trạng thái hiện tại của ứng dụng) và action (action được gửi tới reducer). Reducer có nhiệm vụ xử lý action và trả về trạng thái mới của ứng dụng.
export const initialState = 0;
// sử dụng createReducer để tạo reducer cho Counter. initialState được đặt là giá trị ban đầu của Counter, trong trường hợp này là 0.
export const counterReducer = createReducer(
  // Khi action increment được gửi tới reducer, reducer sẽ tăng giá trị của state lên 1.
  // Khi action decrement được gửi tới reducer, reducer sẽ giảm giá trị của state đi 1.
  // Khi action reset được gửi tới reducer, reducer sẽ đặt giá trị của state về 0.
  initialState,
  // on là một hàm trợ giúp để định nghĩa các xử lý action trong reducer.
  // on(action, reducerFunction)
  // + action là một action được định nghĩa bằng cách sử dụng createAction (như ví dụ của chúng ta là increment, decrement, và reset).
  // + reducerFunction là một hàm xử lý action, nhận trạng thái hiện tại và trả về trạng thái mới.
  // Tóm lại, on là một hàm trợ giúp của NgRx để định nghĩa các xử lý action trong reducer. Nó giúp bạn liên kết action với reducerFunction để xác định cách thay đổi trạng thái của ứng dụng khi nhận các action tương ứng.
  on(increment, (state) => state + 1),
  // Khi bạn gọi store.dispatch(increment()) hoặc store.dispatch(decrement()) từ ứng dụng của bạn, các action tương ứng (increment, decrement) sẽ được gửi đến store và reducer (counterReducer) sẽ xử lý các action này để cập nhật state.
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
// Các hàm xử lý của reducer chỉ định cách thay đổi trạng thái của ứng dụng dựa trên action đã nhận. Sau khi reducer hoàn thành xử lý action, nó sẽ trả về một trạng thái mới, và Redux/NgRx sẽ tự động cập nhật trạng thái của ứng dụng dựa trên giá trị trả về từ reducer.