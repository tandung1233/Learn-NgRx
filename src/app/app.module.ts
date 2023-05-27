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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CounterChauTranComponent,
    CounterStackblitzComponent,
    TutorialTrangNgrxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Bước 3: phải làm
    // Dòng lệnh StoreModule.forRoot({}, {}) trong trường hợp của bạn đăng ký store chính và có thể được sử dụng để cấu hình reducer và các tùy chọn khác cho store chính trong NGRX.
    StoreModule.forRoot({}, {}),
    // Để kích hoạt Redux DevTools trong ứng dụng Angular cần có dòng dưới này
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreModule.forFeature('counter', countReducer),
    // Chưa hiểu vì sao có cái này mới chạy được
    StoreModule.forFeature('count', counterReducer),
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
