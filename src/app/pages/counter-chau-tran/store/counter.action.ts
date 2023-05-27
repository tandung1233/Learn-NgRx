// createAction là một hàm được import từ @ngrx/store để tạo ra một action mới.
import { createAction } from "@ngrx/store";
// increment là một action có tên là "[Counter] Increment".
// Bước 1 đi từ action trước 
export const increment = createAction("[Counter] Increment")
export const decrement = createAction("[Counter] Decrement")