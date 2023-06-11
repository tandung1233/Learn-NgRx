import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CounterChauTranComponent } from './pages/counter-chau-tran/counter-chau-tran.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { countReducer } from './pages/counter-chau-tran/store/counter.reducer';
import { CounterStackblitzComponent } from './pages/counter-stackblitz/counter-stackblitz.component';
import { counterReducer } from './pages/counter-stackblitz/counter.reducers';
import { TutorialTrangNgrxComponent } from './pages/tutorial-trang-ngrx/tutorial-trang-ngrx.component';
import { BookCollectionComponent } from './pages/managebook-of-ngrx/book-collection/book-collection.component';
import { BookListComponent } from './pages/managebook-of-ngrx/book-list/book-list.component';
import { booksReducer } from './pages/managebook-of-ngrx/state/books.reducer';
import { collectionReducer } from './pages/managebook-of-ngrx/state/collection.reducer';
import { ManagebookOfNgrxComponent } from './pages/managebook-of-ngrx/managebook-of-ngrx.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShopCartComponent } from './pages/shop-store-example/shop-cart/shop-cart.component';
import { ShopProductsComponent } from './pages/shop-store-example/shop-products/shop-products.component';
import {
  cartReducer,
  metaReducerLocalStorage,
} from './pages/shop-store-example/cart-state-store/cart.reducer';
import { CommonModule } from '@angular/common';
import { Header2Component } from './pages/shop-store-example/header2/header2.component';
import { AppShopStoreComponent } from './pages/shop-store-example/app-shop-store/app-shop-store.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CounterChauTranComponent,
    CounterStackblitzComponent,
    TutorialTrangNgrxComponent,
    BookCollectionComponent,
    BookListComponent,
    ManagebookOfNgrxComponent,
    ShopCartComponent,
    ShopProductsComponent,
    Header2Component,
    AppShopStoreComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // Bước 3: phải làm
    // Dòng lệnh StoreModule.forRoot({}, {}) trong trường hợp của bạn đăng ký store chính và có thể được sử dụng để cấu hình reducer và các tùy chọn khác cho store chính trong NGRX.
    //  books: booksReducer, collection: collectionReducer: Hỏi chat GPT bảo là bỏ ở đây(kiểu là nó thêm 2 cái state cho mình) và khi chạy devtool ở mục chart sẽ thấy điều kỳ diệu hơn rảnh thì tìm hiểu
    StoreModule.forRoot( //forRoot này chỉ có 1 cái thôi nên là cứ bỏ vào đây cái cái state
      { books: booksReducer, collection: collectionReducer, cartEntries: cartReducer}, // Bước 4: Đặt cartEntries: cartReducer để sử dụng được Reducer
      {metaReducers: [ metaReducerLocalStorage ]}
    ),
    // Để kích hoạt Redux DevTools trong ứng dụng Angular cần có dòng dưới này
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    // Sử dụng selector để truy xuất dữ liệu từ feature "counter" trong store. Khi các action thì countReducer sẽ hoạt động để xử lý các state
    StoreModule.forFeature('counter', countReducer),
    StoreModule.forFeature('count', counterReducer),
    // Rảnh tìm hiểu cái storemodule này
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
// Trong NGRX, StoreModule.forFeature() được sử dụng để đăng ký reducer và trạng thái của một tính năng (feature) cụ thể vào store chính.
// Cụ thể trong trường hợp của bạn, StoreModule.forFeature("counter", countReducer) được sử dụng để đăng ký reducer countReducer và trạng thái của tính năng "counter" vào store chính.
// Điều này có ý nghĩa là:
// counter là tên của tính năng (feature) mà bạn đang đăng ký vào store chính. Tên này là tùy ý và bạn có thể đặt tên theo ý muốn.
// countReducer là reducer của tính năng "counter". Reducer này xử lý các hành động liên quan đến tính năng "counter" và quản lý trạng thái của nó. Trong trường hợp của bạn, countReducer được cung cấp từ file reducer.
// Khi bạn sử dụng StoreModule.forFeature() để đăng ký một tính năng vào store chính, NGRX sẽ tạo ra một phần store riêng cho tính năng đó. Điều này giúp quản lý trạng thái và xử lý hành động của tính năng một cách độc lập và có tổ chức.
// Ví dụ: Nếu bạn có nhiều tính năng trong ứng dụng của mình như "counter", "user", "products" và muốn quản lý trạng thái và reducer của từng tính năng độc lập, bạn có thể sử dụng StoreModule.forFeature() để đăng ký reducer và trạng thái của mỗi tính năng vào store chính.
// Tóm lại, StoreModule.forFeature() trong trường hợp của bạn đăng ký reducer và trạng thái của tính năng "counter" vào store chính trong NGRX.
