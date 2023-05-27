import { Component } from '@angular/core';
import { selectDecrementCount, selectIncrementCount, selectValue } from './store/counter.selector';
import { Store } from '@ngrx/store';
import { decrement, increment } from './store/counter.action';

@Component({
  selector: 'app-counter-chau-tran',
  templateUrl: './counter-chau-tran.component.html',
  styleUrls: ['./counter-chau-tran.component.less']
})
export class CounterChauTranComponent {
  // value$, incrementCount$, và decrementCount$ là các observable được tạo bằng cách sử dụng this.store.select để chọn các giá trị từ store.
  readonly value$ = this.store.select(selectValue);
  readonly incrementCount$ = this.store.select(selectIncrementCount);
  readonly decrementCount$ = this.store.select(selectDecrementCount);
  // Constructor nhận một instance của Store và lưu nó vào biến store.
  constructor(private readonly store: Store) { }
  // increment() là một phương thức gửi một action increment đến store bằng cách sử dụng this.store.dispatch(increment()).
  increment() {
    this.store.dispatch(increment())
  }
  decrement() {
    this.store.dispatch(decrement())
  }
}
