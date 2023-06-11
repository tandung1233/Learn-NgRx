import { Product } from './../entity/product';
import { createAction, props } from '@ngrx/store';
// Bước 1: Tạo Actions đại diện cho các sự kiện hoặc hành động add, remove product
export const addProduct = createAction('Add Product', props<Product>());
export const removeProduct = createAction('Remove Product', props<Product>());
export const clearCart = createAction('Clear Cart');
