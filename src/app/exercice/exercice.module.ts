import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { MainExerciceComponent } from '../exercice/components/main-exercice/main-exercice.component';
import { SharedModule } from '../shared/shared.module';
import { ExosChronoComponent } from '../exercice/components/exos-chrono/exos-chrono.component';


@NgModule({
  declarations: [
    MainExerciceComponent,
    ExosChronoComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule
  ],
  bootstrap:[
    MainExerciceComponent
  ]
})
export class ExerciceModule { }
