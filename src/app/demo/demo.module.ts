import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { MainDemoComponent } from '../demo/components/main-demo/main-demo.component';
import { DemoBindingComponent } from '../demo/components/demo-binding/demo-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoPipeComponent } from '../demo/components/demo-pipe/demo-pipe.component';
import { SharedModule } from '../shared/shared.module';
import { DemoDirectCompoComponent } from './components/demo-direct-compo/demo-direct-compo.component';
import { DemoDirectStructComponent } from './components/demo-direct-struct/demo-direct-struct.component';
import { DemoDirectCustomComponent } from './components/demo-direct-custom/demo-direct-custom.component';
import { InputOutputMainComponent } from './components/input-output-main/input-output-main.component';
import { InputOutputListComponent } from './components/input-output-list/input-output-list.component';
import { DemoServiceComponent } from '../demo/components/demo-service/demo-service.component';
import { DemoFormComponent } from '../demo/components/demo-form/demo-form.component';
import { DemoPersonFormComponent } from '../demo/components/demo-person-form/demo-person-form.component';
import { UrlParamsComponent } from '../demo/components/url-params/url-params.component';
import { UrlParamsProductComponent } from '../demo/components/url-params-product/url-params-product.component';
import { UrlParamsProductsListComponent } from '../demo/components/url-params-products-list/url-params-products-list.component';
import { DemoSessionServiceComponent } from './components/demo-session-service/demo-session-service.component';
import { DemoRandomUserAPIComponent } from './components/demo-random-user-api/demo-random-user-api.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderTotoInterceptor } from '../interceptors/header-toto.interceptor';


@NgModule({
  declarations: [
    MainDemoComponent,
    DemoBindingComponent,
    DemoPipeComponent,
    DemoDirectCompoComponent,
    DemoDirectStructComponent,
    DemoDirectCustomComponent,
    InputOutputMainComponent,
    InputOutputListComponent,
    DemoServiceComponent,
    DemoFormComponent,
    DemoPersonFormComponent,
    UrlParamsComponent,
    UrlParamsProductComponent,
    UrlParamsProductsListComponent,
    DemoSessionServiceComponent,
    DemoRandomUserAPIComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  bootstrap:[MainDemoComponent]
})
export class DemoModule { }
