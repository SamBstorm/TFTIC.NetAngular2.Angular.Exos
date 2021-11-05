import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from '../pipes/to-fahrenheit.pipe';



@NgModule({
  declarations: [
    ToFahrenheitPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ToFahrenheitPipe
  ]
})
export class SharedModule { }
