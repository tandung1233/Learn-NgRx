// Bước 1: Thực hiện để định nghĩa và đại diện cho các sự kiện liên quan đến quản lý sách trong ứng dụng
import { createActionGroup, props } from '@ngrx/store';
import { Book } from '../book-list/books.model';
// Khi phát triển ứng dụng sử dụng ngRx, ta thường xây dựng nhiều action để thực hiện các hoạt động khác nhau trên trạng thái của ứng dụng. Tuy nhiên, khi số lượng action tăng lên, việc quản lý và xử lý chúng trở nên phức tạp hơn.
// createActionGroup giúp tổ chức các action vào các nhóm có liên quan, giúp cho việc quản lý và xử lý các hoạt động trở nên dễ dàng hơn. Điều này có ích khi ta cần nhóm các action liên quan đến cùng một phần của ứng dụng hoặc khi ta muốn tách biệt các action phục vụ cho các mục đích khác nhau, ví dụ như giao tiếp với API, xử lý lỗi, thực hiện side effects, và nhiều hơn nữa.
// Khi sử dụng createActionGroup, ta chỉ cần xác định tên và các sự kiện của nhóm action, sử dụng cú pháp như ví dụ trong câu hỏi. Sau đó, ngRx sẽ tạo ra các action tương ứng và chúng có thể được sử dụng trong reducer và các thành phần khác của ứng dụng
export const BooksActions = createActionGroup({
  // Thuộc tính source được đặt là 'Books', đại diện cho nguồn gốc của các action trong nhóm này
  source: 'Books',
  // Các sự kiện (events) trong nhóm action bao gồm:
  // 'Add Book': Là một action để thêm sách vào ứng dụng. Nó nhận một đối tượng bookId làm tham số.
  // 'Remove Book': Là một action để xóa sách khỏi ứng dụng. Nó nhận một đối tượng bookId làm tham số.
  events: {
    // props nhận vào một đối tượng TypeScript và sử dụng kiểu dữ liệu trong TypeScript để xác định các thuộc tính của action.
    // props<{ bookId: string }>() cho phép chúng ta xác định rõ rằng action addBook sẽ có một thuộc tính bookId kiểu string.
    // Hàm props giúp cung cấp một cách tiện lợi và an toàn để xác định kiểu dữ liệu của các thuộc tính trong action. Nó giúp tạo ra các action có cấu trúc rõ ràng và dễ đọc, và cũng hỗ trợ tính năng kiểm tra kiểu tĩnh trong TypeScript để phát hiện lỗi và cung cấp trợ giúp định dạng đúng các thuộc tính của action
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});

export const BooksApiActions = createActionGroup({
  // Thuộc tính source được đặt là 'Books API', đại diện cho nguồn gốc của các action trong nhóm này.
  source: 'Books API',
  // Các sự kiện (events) trong nhóm action bao gồm:
  // 'Retrieved Book List': Là một action để biểu thị danh sách sách đã được tải về từ API. Nó nhận một đối tượng books chứa một mảng các đối tượng Book làm tham số
  events: {
    'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
  },
});
// Các action được định nghĩa bằng cách sử dụng hàm props để định nghĩa các thuộc tính của action. Ví dụ: props<{ bookId: string }>() sử dụng để chỉ định rằng action 'Add Book' và 'Remove Book' sẽ chứa một thuộc tính bookId kiểu chuỗi.
// Khi bạn sử dụng các action này trong ứng dụng của mình, bạn sẽ gọi các hàm dispatch để gửi các action này đến Ngrx store, từ đó kích hoạt việc cập nhật trạng thái của ứng dụng.