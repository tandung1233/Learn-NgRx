import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './counter.actions';

@Component({
  selector: 'app-counter-stackblitz',
  templateUrl: './counter-stackblitz.component.html',
  styleUrls: ['./counter-stackblitz.component.less']
})
export class CounterStackblitzComponent {
  public count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  public increment() {
    this.store.dispatch(increment());
  }

  public decrement() {
    this.store.dispatch(decrement());
  }

  public reset() {
    this.store.dispatch(reset());
  }
}
