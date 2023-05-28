import { createReducer, on } from '@ngrx/store';
import { BooksActions } from './books.actions';
// Khai báo trạng thái ban đầu của reducer là một mảng rỗng ([]), trong trường hợp này chứa các chuỗi đại diện cho các ID của sách.
export const initialState: ReadonlyArray<string> = [];
// Xây dựng reducer bằng cách sử dụng createReducer và định nghĩa bộ lắng nghe hành động.
export const collectionReducer = createReducer(
  // Bộ lắng nghe đầu tiên được gắn kết với hành động BooksActions.removeBook. Khi hành động này được kích hoạt, reducer sẽ thực thi hàm xử lý (state, { bookId }) => state.filter((id) => id !== bookId). Đối số state là trạng thái hiện tại của reducer, và { bookId } là một đối tượng chứa ID của cuốn sách cần xóa. Hàm xử lý này sẽ trả về một mảng mới, chỉ chứa các phần tử có ID khác với bookId, bằng cách sử dụng phương thức filter().
  initialState,
  on(BooksActions.removeBook, (state, { bookId }) =>
    state.filter((id) => id !== bookId)
  ),
  // Bộ lắng nghe thứ hai gắn kết với hành động BooksActions.addBook. Khi hành động này được kích hoạt, reducer sẽ thực thi hàm xử lý (state, { bookId }) => { ... }. Đối số state là trạng thái hiện tại của reducer, và { bookId } là một đối tượng chứa ID của cuốn sách cần thêm vào bộ sưu tập. Hàm xử lý này kiểm tra xem bookId đã tồn tại trong state hay chưa bằng cách sử dụng indexOf(). Nếu đã tồn tại, reducer trả về trạng thái hiện tại (state) mà không thay đổi. Ngược lại, nếu bookId chưa tồn tại, reducer trả về một mảng mới được tạo bằng toán tử spread ([...state]), và bookId được thêm vào cuối mảng mới.
  on(BooksActions.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
  })
);
// export const collectionReducer; Xuất reducer để có thể sử dụng trong ngRx Store.