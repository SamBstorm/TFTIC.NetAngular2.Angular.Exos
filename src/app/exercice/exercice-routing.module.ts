import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExosChronoComponent } from './components/exos-chrono/exos-chrono.component';
import { MainExerciceComponent } from './components/main-exercice/main-exercice.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'main', component : MainExerciceComponent},
  {path:'exo_01', component : ExosChronoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
