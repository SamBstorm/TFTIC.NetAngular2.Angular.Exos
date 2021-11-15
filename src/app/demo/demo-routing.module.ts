import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { DemoDirectCompoComponent } from './components/demo-direct-compo/demo-direct-compo.component';
import { DemoDirectCustomComponent } from './components/demo-direct-custom/demo-direct-custom.component';
import { DemoDirectStructComponent } from './components/demo-direct-struct/demo-direct-struct.component';
import { DemoFormComponent } from './components/demo-form/demo-form.component';
import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { DemoServiceComponent } from './components/demo-service/demo-service.component';
import { InputOutputMainComponent } from './components/input-output-main/input-output-main.component';
import { MainDemoComponent } from './components/main-demo/main-demo.component';
import { UrlParamsProductComponent } from './components/url-params-product/url-params-product.component';
import { UrlParamsProductsListComponent } from './components/url-params-products-list/url-params-products-list.component';
import { UrlParamsComponent } from './components/url-params/url-params.component';
import { UsernameGuard } from './guards/username.guard';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'main', component: MainDemoComponent},
  {path:'demo_01', component:DemoBindingComponent},
  {path:'demo_02', component:DemoPipeComponent},
  {path:'demo_03', component:DemoDirectCompoComponent},
  {path:'demo_04', component:DemoDirectStructComponent},
  {path:'demo_05', component:DemoDirectCustomComponent},
  {path:'demo_06', component:InputOutputMainComponent},
  {path:'demo_07', component:DemoServiceComponent},
  {path:'demo_08', component:DemoFormComponent},
  {path:'demo_09/:message/:name', component:UrlParamsComponent},
  {path:'demo_10', component:UrlParamsProductsListComponent},
  {path:'product/:id', component:UrlParamsProductComponent},  
  {path:'demo_11', component:DemoServiceComponent, canActivate: [UsernameGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
