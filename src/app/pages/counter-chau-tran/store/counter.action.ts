import { createAction } from "@ngrx/store";

// Bước 1 đi từ action trước 
export const increment = createAction("[Counter] Increment")
export const decrement = createAction("[Counter] Decrement")