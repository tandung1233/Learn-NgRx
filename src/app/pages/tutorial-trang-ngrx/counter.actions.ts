// Bước 1: Tạo action để đại diện cho các sự kiện trong ứng dụng
import { createAction } from '@ngrx/store';
// createAction giúp bạn tạo ra các action trong ngrx hoặc Redux,
// mô tả các sự kiện hoặc hành động trong ứng dụng và chuyển thông tin đến reducers
// để thay đổi trạng thái của ứng dụng.
// Khi bạn gọi action increment, nó sẽ tạo ra một action object với type là '[Counter Component] Increment'. Mục đích của action này là thông báo rằng bạn muốn tăng giá trị của thành phần Counter trong ứng dụng.
export const increment = createAction('[Counter Component] Increment');// Cái chuỗi bên trong là để định danh thôi ghi gì củng được đừng trung với nhau là được
export const decrement = createAction('[Counter Component] Decrement',);
export const reset = createAction('[Counter Component] Reset');
// Tóm lại, type của action được tạo ra bằng cách sử dụng createAction là một chuỗi duy nhất để định danh action và phân biệt các action trong quá trình xử lý trong store.