import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { MainDemoComponent } from './components/main-demo/main-demo.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'main', component: MainDemoComponent},
  {path:'demo_01', component:DemoBindingComponent},
  {path:'demo_02', component:DemoPipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
