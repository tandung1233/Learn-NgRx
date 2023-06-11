import { Product } from './../entity/product';
import { createFeatureSelector, createSelector } from '@ngrx/store';
// Bước 3: Tạo selectors cho phép bạn truy xuất và lấy dữ liệu từ store
export interface ProductGroup {
  product: Product;
  count: number;
}

export const selectCountProducts = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    return state.length;
  }
);

export const selectTotalPrice = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    var totalPrice = 0;
    state.forEach((p) => (totalPrice += p.price));
    return totalPrice;
  }
);

export const selectGroupedCartEntries = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    var map: Map<number, ProductGroup> = new Map();

    state.forEach((p) => {
      if (map.get(p.id)) {
        (map.get(p.id) as ProductGroup).count++;
      } else {
        map.set(p.id, { product: p, count: 1 });
      }
    });

    const sortedMap = new Map([...map.entries()].sort());
    return Array.from(sortedMap.values());
  }
);
