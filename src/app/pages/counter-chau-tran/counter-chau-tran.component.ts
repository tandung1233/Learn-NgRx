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
  readonly value$ = this.store.select(selectValue);
  readonly incrementCount$ = this.store.select(selectIncrementCount);
  readonly decrementCount$ = this.store.select(selectDecrementCount);
  constructor(private readonly store: Store) { }
  decrement() {
    this.store.dispatch(decrement())
  }
  increment() {
    this.store.dispatch(increment())
  }
}
