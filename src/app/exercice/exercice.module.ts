import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { MainExerciceComponent } from '../exercice/components/main-exercice/main-exercice.component';
import { SharedModule } from '../shared/shared.module';
import { ExosChronoComponent } from '../exercice/components/exos-chrono/exos-chrono.component';
import { ShoppingMainComponent } from '../exercice/components/shopping-main/shopping-main.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from '../exercice/components/shopping-list/shopping-list.component';


@NgModule({
  declarations: [
    MainExerciceComponent,
    ExosChronoComponent,
    ShoppingMainComponent,
    ShoppingListComponent
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
