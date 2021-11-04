import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDemoComponent } from './components/main-demo/main-demo.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'main', component: MainDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
