import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoFanCreateComponent } from './components/exo-fan-create/exo-fan-create.component';
import { ExoFanDetailsComponent } from './components/exo-fan-details/exo-fan-details.component';
import { ExoFanListComponent } from './components/exo-fan-list/exo-fan-list.component';
import { ExoFanUpdateComponent } from './components/exo-fan-update/exo-fan-update.component';
import { ExosChronoComponent } from './components/exos-chrono/exos-chrono.component';
import { MainExerciceComponent } from './components/main-exercice/main-exercice.component';
import { ShoppingMainComponent } from './components/shopping-main/shopping-main.component';
import { ShoppingMain2Component } from './components/shopping-main2/shopping-main2.component';
import { GetFanResolver } from './resolvers/get-fan-resolver';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'main', component : MainExerciceComponent},
  {path:'exo_01', component : ExosChronoComponent},
  {path:'exo_02', component : ShoppingMainComponent},
  {path:'exo_03', component : ShoppingMain2Component},
  {path:'exo_04', component : ExoFanListComponent},
  {path:'fan/create', component : ExoFanCreateComponent},
  {path:'fan/:name', resolve: {fan : GetFanResolver} ,component : ExoFanDetailsComponent},
  {path:'fan/:name/edit', resolve: {fan : GetFanResolver} , component : ExoFanUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
