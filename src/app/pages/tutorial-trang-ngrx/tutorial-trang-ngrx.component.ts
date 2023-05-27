import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './counter.actions';

@Component({
  selector: 'app-tutorial-trang-ngrx',
  templateUrl: './tutorial-trang-ngrx.component.html',
})
  // Bước 4: Viết code ở component
export class TutorialTrangNgrxComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    // select là một phương thức được cung cấp bởi store để lấy trạng thái từ store và theo dõi sự thay đổi của nó.
    // Khi bạn gọi store.select(selector), nơi selector là một hàm hoặc một chuỗi, store sẽ lấy trạng thái từ store dựa trên selector đó và trả về một observable. Observable này sẽ phát ra giá trị mới mỗi khi trạng thái trong store thay đổi.
    // Trong ví dụ của bạn, this.count$ = store.select('count') đang sử dụng một selector là chuỗi 'count'. Điều này đồng nghĩa với việc bạn đang yêu cầu lấy trạng thái của thuộc tính count từ store
    // Kết quả của store.select('count') là một observable (count$) mà bạn có thể sử dụng để theo dõi sự thay đổi của trạng thái count. Mỗi khi trạng thái count trong store thay đổi, observable count$ sẽ phát ra giá trị mới. Bạn có thể sử dụng count$ trong component của bạn để lắng nghe các thay đổi này và cập nhật giao diện người dùng.
    // Tóm lại, select là phương thức của store để lấy trạng thái từ store và theo dõi sự thay đổi của nó. Bằng cách sử dụng select, bạn có thể lấy trạng thái từ store thông qua selector và sử dụng observable để theo dõi và cập nhật giao diện người dùng dựa trên sự thay đổi của trạng thái.
    this.count$ = store.select('count'); // count này ở trên constructor
  }

  increment() {
    // dispatch là phương thức của store để gửi các action đến reducer và kích hoạt xử lý action. Khi action được gửi đi, reducer sẽ nhận action và thực hiện hàm xử lý action tương ứng, dẫn đến việc cập nhật trạng thái của ứng dụng.
    // Để reducer chạy, bạn cần đảm bảo rằng bạn đã gọi các action tương ứng từ ứng dụng của bạn bằng cách sử dụng store.dispatch(action). Khi action được dispatch, reducer sẽ được kích hoạt và xử lý action để cập nhật state theo logic xác định.
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
// ví dụ khi chạy vào store.dispatch(increment()) thì ngRx sẽ chạy tiếp cái gì???
// Khi bạn gọi store.dispatch(increment()) trong ứng dụng của bạn, NgRx sẽ thực hiện các bước sau:
// 1) Action increment sẽ được gửi đến store thông qua store.dispatch().
// 2) Store sẽ nhận action và chuyển action này đến reducer tương ứng.
// 3) Reducer (counterReducer trong trường hợp của bạn) sẽ kiểm tra type của action để xác định xem action này có liên quan đến nó hay không.
// 4) Trong trường hợp của action increment, reducer sẽ thực hiện hàm xử lý action được xác định bởi on(increment, (state) => state + 1).
// 5) Reducer sẽ thực hiện logic xử lý, trong trường hợp này là tăng giá trị của state lên 1 đơn vị (state + 1).
// 6) Reducer trả về một state mới sau khi xử lý action.
// 7) Store nhận state mới từ reducer và cập nhật state của ứng dụng bằng state mới này.
// 8) Các thành phần trong ứng dụng được kết nối với store thông qua selectors (store.select()) sẽ được thông báo về sự thay đổi của state.
// 9) Các thành phần được kết nối sẽ cập nhật giao diện người dùng của chúng để phản ánh state mới.
// Vì vậy, khi bạn gọi store.dispatch(increment()), reducer counterReducer sẽ chạy hàm xử lý action tương ứng và cập nhật state của ứng dụng. Sau đó, các thành phần được kết nối sẽ được cập nhật để hiển thị state mới.