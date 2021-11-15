import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { MainExerciceComponent } from '../exercice/components/main-exercice/main-exercice.component';
import { SharedModule } from '../shared/shared.module';
import { ExosChronoComponent } from '../exercice/components/exos-chrono/exos-chrono.component';
import { ShoppingMainComponent } from '../exercice/components/shopping-main/shopping-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListComponent } from '../exercice/components/shopping-list/shopping-list.component';
import { ShoppingMain2Component } from '../exercice/components/shopping-main2/shopping-main2.component';
import { ShoppingList2Component } from '../exercice/components/shopping-list2/shopping-list2.component';
import { ExoFanListComponent } from './components/exo-fan-list/exo-fan-list.component';
import { ExoFanDetailsComponent } from './components/exo-fan-details/exo-fan-details.component';
import { ExoFanCreateComponent } from './components/exo-fan-create/exo-fan-create.component';
import { ExoFanUpdateComponent } from './components/exo-fan-update/exo-fan-update.component';


@NgModule({
  declarations: [
    MainExerciceComponent,
    ExosChronoComponent,
    ShoppingMainComponent,
    ShoppingListComponent,
    ShoppingMain2Component,
    ShoppingList2Component,
    ExoFanListComponent,
    ExoFanDetailsComponent,
    ExoFanCreateComponent,
    ExoFanUpdateComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap:[
    MainExerciceComponent
  ]
})
export class ExerciceModule { }
