// Bước 3: Định nghĩa một tập hợp các selectors trong ngRx để lựa chọn và truy xuất dữ liệu từ trạng thái ứng dụng
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../book-list/books.model';
// Định nghĩa selector selectBooks bằng cách sử dụng createFeatureSelector.
// Selector selectBooks được tạo bằng cách sử dụng createFeatureSelector và nhận vào một tham số là tên của feature (tính năng) trong trạng thái ứng dụng. Trong trường hợp này, feature được đặt tên là 'books'. Selector này trả về trạng thái của feature 'books', trong trường hợp này là một mảng các đối tượng sách (ReadonlyArray<Book>).
export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');
// Định nghĩa selector selectCollectionState bằng cách sử dụng createFeatureSelector.
// Selector selectCollectionState được tạo tương tự như selectBooks, nhưng được sử dụng để truy xuất trạng thái của feature 'collection'. Trong trường hợp này, feature 'collection' đại diện cho một mảng các chuỗi, đại diện cho ID của các cuốn sách trong bộ sưu tập.
// Selector selectBookCollection sử dụng createSelector để tạo một selector mới dựa trên các selectors đã được định nghĩa trước đó (selectBooks và selectCollectionState). Các selectors này được truyền vào như các đối số đầu tiên của createSelector. Đối số cuối cùng là một hàm xử lý nhận kết quả từ các selectors trước đó.
// Trong hàm xử lý, books và collection là các giá trị trả về từ selectBooks và selectCollectionState. Hàm xử lý này sử dụng phương thức map trên collection để tạo một mảng mới. Trong mỗi lần lặp, nó sử dụng phương thức find trên books để tìm cuốn sách có book.id trùng với từng phần tử trong collection. Kết quả trả về là một mảng các cuốn sách trong bộ sưu tập. Lưu ý rằng ký hiệu '!' được sử dụng để khẳng định rằng kết quả của books.find(...) sẽ không bị null hoặc undefined.
export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
  >('collection');
  // Định nghĩa selector selectBookCollection bằng cách sử dụng createSelector và kết hợp các selectors trước đó.
  // Selector selectBookCollection sử dụng createSelector để tạo một selector mới dựa trên các selectors đã được định nghĩa trước đó (selectBooks và selectCollectionState). Các selectors này được truyền vào như các đối số đầu tiên của createSelector. Đối số cuối cùng là một hàm xử lý nhận kết quả từ các selectors trước đó.
  // Trong hàm xử lý, books và collection là các giá trị trả về từ selectBooks và selectCollectionState. Hàm xử lý này sử dụng phương thức map trên collection để tạo một mảng mới. Trong mỗi lần lặp, nó sử dụng phương thức find trên books để tìm cuốn sách có book.id trùng với từng phần tử trong collection. Kết quả trả về là một mảng các cuốn sách trong bộ sưu tập. Lưu ý rằng ký hiệu '!' được sử dụng để khẳng định rằng kết quả của books.find(...) sẽ không bị null hoặc undefined.
export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id)!);
  }
);