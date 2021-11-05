import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { DemoDirectCompoComponent } from './components/demo-direct-compo/demo-direct-compo.component';
import { DemoDirectCustomComponent } from './components/demo-direct-custom/demo-direct-custom.component';
import { DemoDirectStructComponent } from './components/demo-direct-struct/demo-direct-struct.component';
import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { MainDemoComponent } from './components/main-demo/main-demo.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'main', component: MainDemoComponent},
  {path:'demo_01', component:DemoBindingComponent},
  {path:'demo_02', component:DemoPipeComponent},
  {path:'demo_03', component:DemoDirectCompoComponent},
  {path:'demo_04', component:DemoDirectStructComponent},
  {path:'demo_05', component:DemoDirectCustomComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
