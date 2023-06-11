import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CounterChauTranComponent } from './pages/counter-chau-tran/counter-chau-tran.component';
import { CounterStackblitzComponent } from './pages/counter-stackblitz/counter-stackblitz.component';
import { TutorialTrangNgrxComponent } from './pages/tutorial-trang-ngrx/tutorial-trang-ngrx.component';
import { ManagebookOfNgrxComponent } from './pages/managebook-of-ngrx/managebook-of-ngrx.component';
import { AppShopStoreComponent } from './pages/shop-store-example/app-shop-store/app-shop-store.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter-chau-tran', component: CounterChauTranComponent },
  { path: 'counter-stackblitz', component: CounterStackblitzComponent },
  { path: 'tutorial-trang-ngrx', component: TutorialTrangNgrxComponent },
  { path: 'manageBook-of-ngrx', component: ManagebookOfNgrxComponent },
  { path: 'store-example', component: AppShopStoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
