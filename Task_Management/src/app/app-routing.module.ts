import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskChartComponent } from './task-chart/task-chart.component';


const routes: Routes = [
  {path : "" , component:LandingComponent},
  {path:"task-list",component:TaskListComponent},
  {path:"task-chart",component:TaskChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
