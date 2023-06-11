import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectCountProducts,
  selectTotalPrice,
} from './../cart-state-store/cart.selectors';
@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.less'],
})
export class Header2Component implements OnInit {
  countProducts$: Observable<number>;
  totalPrice$: Observable<number>;
  // Bước 5: Lấy ra và sử dụng thôi 
  constructor(private store: Store) {
    this.countProducts$ = store.select(selectCountProducts);
    this.totalPrice$ = store.select(selectTotalPrice);
  }

  ngOnInit(): void {}
}
