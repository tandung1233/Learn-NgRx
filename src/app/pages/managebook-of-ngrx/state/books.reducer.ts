// Bước 2: 
// File reducer trong ngRx có tác dụng xác định cách thức thay đổi trạng thái của ứng dụng khi nhận được các action. Nó xác định cách action sẽ ảnh hưởng đến state và cung cấp logic để thay đổi state dựa trên action đó.
// Trong ví dụ của bạn, file reducer (booksReducer) định nghĩa cách thức thay đổi trạng thái của ứng dụng khi action BooksApiActions.retrievedBookList được gửi đi. Khi action này được kích hoạt, reducer sẽ lấy danh sách sách mới (books) từ action payload và trả về danh sách sách mới đó để thay thế trạng thái hiện tại của ứng dụng.
// File reducer là nơi quan trọng để xác định các hành động (actions) sẽ ảnh hưởng đến trạng thái của ứng dụng và cung cấp cách thức để thay đổi trạng thái đó. Nó giúp duy trì trạng thái chung của ứng dụng và cung cấp một cách thức cho các thành phần khác nhau của ứng dụng để truy cập và cập nhật trạng thái đó thông qua cơ chế quản lý trạng thái của ngRx
import { createReducer, on } from '@ngrx/store';

import { BooksApiActions } from './books.actions';
import { Book } from '../book-list/books.model';
// Đoạn code khai báo một hằng số initialState với giá trị là một mảng rỗng ([]). Đây là trạng thái ban đầu của reducer, khi ứng dụng được khởi chạy, danh sách sách sẽ không có bất kỳ cuốn sách nào.
export const initialState: ReadonlyArray<Book> = [];
// Xây dựng reducer bằng cách sử dụng createReducer và định nghĩa bộ lắng nghe hành động.
// Đoạn mã này sử dụng phương thức createReducer để tạo reducer. Nó nhận vào trạng thái ban đầu (initialState) và một hoặc nhiều bộ lắng nghe hành động. Trong trường hợp này, chúng ta chỉ định một bộ lắng nghe duy nhất sử dụng phương thức on.
// Bộ lắng nghe được gắn kết với hành động BooksApiActions.retrievedBookList. Khi hành động này được kích hoạt, reducer sẽ thực thi hàm xử lý (_state, { books }) => books. Đối số _state đại diện cho trạng thái hiện tại của reducer, nhưng trong trường hợp này không được sử dụng. Đối số thứ hai { books } là một đối tượng chứa dữ liệu sách được lấy về từ API.
// Trong thân của hàm xử lý, chúng ta trả về books, tức là danh sách sách mới được lấy từ API. Khi hành động BooksApiActions.retrievedBookList được kích hoạt, reducer sẽ nhận dữ liệu sách từ API và cập nhật trạng thái của ứng dụng thành danh sách sách mới đó.
export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);