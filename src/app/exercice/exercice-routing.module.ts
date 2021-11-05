import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainExerciceComponent } from './components/main-exercice/main-exercice.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'main', component : MainExerciceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
