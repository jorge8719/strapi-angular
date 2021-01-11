import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishDetailComponent } from './components/dish-detail/dish-detail.component';
import { DishListComponent } from './components/dish-list/dish-list.component';

const routes: Routes = [
  {
    path: 'menu',
    component: DishListComponent
  },
  {
    path: 'menu/:name/:id',
    component: DishDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
