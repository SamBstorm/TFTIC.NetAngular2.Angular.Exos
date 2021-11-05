import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { MainDemoComponent } from '../demo/components/main-demo/main-demo.component';
import { DemoBindingComponent } from '../demo/components/demo-binding/demo-binding.component';
import { FormsModule } from '@angular/forms';
import { DemoPipeComponent } from '../demo/components/demo-pipe/demo-pipe.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainDemoComponent,
    DemoBindingComponent,
    DemoPipeComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    SharedModule
  ],
  bootstrap:[MainDemoComponent]
})
export class DemoModule { }
