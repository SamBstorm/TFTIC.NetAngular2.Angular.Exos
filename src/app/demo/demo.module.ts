import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { MainDemoComponent } from '../demo/components/main-demo/main-demo.component';


@NgModule({
  declarations: [
    MainDemoComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ],
  bootstrap:[MainDemoComponent]
})
export class DemoModule { }
