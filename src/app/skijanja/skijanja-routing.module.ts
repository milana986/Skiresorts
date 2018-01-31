import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
import { SkiresortListComponent } from './skiresort-list/skiresort-list.component';

const skiRoutes:Routes = [
	{path:'skiresorts/:id', component: SkiresortListComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(skiRoutes)
  ],
  exports:[
  	RouterModule
  ],
  declarations: []
})
export class SkiresortsRoutingModule { }