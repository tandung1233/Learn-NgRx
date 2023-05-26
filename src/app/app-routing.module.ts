import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CounterChauTranComponent } from './pages/counter-chau-tran/counter-chau-tran.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter-chau-tran', component: CounterChauTranComponent },
  // { path: 'nztable', component: NzTabelComponent },
  // { path: 'td', component: TdComponent },
  // { path: 'th', component: ThComponent },
  // { path: 'tr', component: TrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
