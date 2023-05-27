import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CounterChauTranComponent } from './pages/counter-chau-tran/counter-chau-tran.component';
import { CounterStackblitzComponent } from './pages/counter-stackblitz/counter-stackblitz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter-chau-tran', component: CounterChauTranComponent },
  { path: 'counter-stackblitz', component: CounterStackblitzComponent },
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
