import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { MainDemoComponent } from '../demo/components/main-demo/main-demo.component';
import { DemoBindingComponent } from '../demo/components/demo-binding/demo-binding.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainDemoComponent,
    DemoBindingComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
  ],
  bootstrap:[MainDemoComponent]
})
export class DemoModule { }
