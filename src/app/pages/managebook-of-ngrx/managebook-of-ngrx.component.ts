import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/books.selectors';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { GoogleBooksService } from './book-list/google-books.service';

@Component({
  selector: 'app-managebook-of-ngrx',
  templateUrl: './managebook-of-ngrx.component.html',
  styleUrls: ['./managebook-of-ngrx.component.less']
})
export class ManagebookOfNgrxComponent {
// books$ là một thuộc tính Observable được khởi tạo bằng cách sử dụng phương thức select() của đối tượng store. Nó lấy giá trị từ trạng thái "books" trong ngRx Store.
// selectBooks là một selector, có nhiệm vụ truy xuất trạng thái "books" từ trạng thái tổng quan của ứng dụng.
// Kết quả của selectBooks sẽ trả về một Observable chứa trạng thái sách.
  books$ = this.store.select(selectBooks);
// bookCollection$ là một thuộc tính Observable được khởi tạo bằng cách sử dụng phương thức select() của đối tượng store. Nó lấy giá trị từ trạng thái "collection" trong ngRx Store.
// selectBookCollection là một selector, có nhiệm vụ truy xuất trạng thái "collection" từ trạng thái tổng quan của ứng dụng.
// Kết quả của selectBookCollection sẽ trả về một Observable chứa trạng thái bộ sưu tập sách.
  bookCollection$ = this.store.select(selectBookCollection);
  // store là một instance của Store từ ngRx, được sử dụng để quản lý trạng thái và thực hiện các dispatch actions.
  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
  // Kết quả trả về từ API được subscribe và sau đó dispatch action BooksApiActions.retrievedBookList({ books }) để lưu trữ danh sách sách vào trạng thái "books" trong ngRx Store.
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }

// Phương thức onAdd() được gọi khi một sự kiện "add" được kích hoạt, với thông tin về bookId.
// Phương thức này dispatch action BooksActions.addBook({ bookId }) để thêm sách vào bộ sưu tập sách.
  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }
// Phương thức onRemove() được gọi khi một sự kiện "remove" được kích hoạt, với thông tin về bookId.
// Phương thức này dispatch action BooksActions.removeBook({ bookId }) để xóa sách khỏi bộ sưu tập sách.
  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
}
// Tổng quan, thành phần ManagebookOfNgrxComponent này sử dụng ngRx để quản lý trạng thái sách và bộ sưu tập sách. Nó lấy dữ liệu sách từ API thông qua booksService, lưu trữ nó vào ngRx Store bằng cách dispatch các actions, và sử dụng selectors để truy cập và hiển thị các trạng thái sách và bộ sưu tập sách trong template hoặc giao diện người dùng.
