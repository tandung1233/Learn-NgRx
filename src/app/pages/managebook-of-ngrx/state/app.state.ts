// Bước 4: Mô tả trạng thái tổng quan của ứng dụng trong ngRx.
import { Book } from '../book-list/books.model';

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}
// Interface AppState mô tả trạng thái tổng quan của ứng dụng. Trong trường hợp này, nó bao gồm hai thuộc tính:
// books: Đại diện cho trạng thái của feature 'books' trong ứng dụng. Nó là một mảng chỉ đọc (ReadonlyArray) của các đối tượng Book.
// collection: Đại diện cho trạng thái của feature 'collection' trong ứng dụng. Nó là một mảng chỉ đọc (ReadonlyArray) của các chuỗi, đại diện cho ID của các cuốn sách trong bộ sưu tập.
// Interface AppState này được sử dụng để định nghĩa kiểu dữ liệu cho trạng thái tổng quan của ứng dụng trong ngRx Store. Khi định nghĩa các reducers, selectors và effects, nó sẽ được sử dụng để xác định kiểu dữ liệu của trạng thái và các thuộc tính trong store.
