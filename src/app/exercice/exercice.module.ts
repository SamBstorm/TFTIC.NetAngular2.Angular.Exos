import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { MainExerciceComponent } from '../exercice/components/main-exercice/main-exercice.component';


@NgModule({
  declarations: [
    MainExerciceComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule
  ],
  bootstrap:[
    MainExerciceComponent
  ]
})
export class ExerciceModule { }
