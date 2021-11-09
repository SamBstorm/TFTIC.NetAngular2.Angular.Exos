import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { MainDemoComponent } from '../demo/components/main-demo/main-demo.component';
import { DemoBindingComponent } from '../demo/components/demo-binding/demo-binding.component';
import { FormsModule } from '@angular/forms';
import { DemoPipeComponent } from '../demo/components/demo-pipe/demo-pipe.component';
import { SharedModule } from '../shared/shared.module';
import { DemoDirectCompoComponent } from './components/demo-direct-compo/demo-direct-compo.component';
import { DemoDirectStructComponent } from './components/demo-direct-struct/demo-direct-struct.component';
import { DemoDirectCustomComponent } from './components/demo-direct-custom/demo-direct-custom.component';
import { InputOutputMainComponent } from './components/input-output-main/input-output-main.component';
import { InputOutputListComponent } from './components/input-output-list/input-output-list.component';


@NgModule({
  declarations: [
    MainDemoComponent,
    DemoBindingComponent,
    DemoPipeComponent,
    DemoDirectCompoComponent,
    DemoDirectStructComponent,
    DemoDirectCustomComponent,
    InputOutputMainComponent,
    InputOutputListComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ],
  bootstrap:[MainDemoComponent]
})
export class DemoModule { }
