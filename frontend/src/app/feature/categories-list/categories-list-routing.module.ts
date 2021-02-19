import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailComponent } from 'src/app/components/category-detail/category-detail.component';
import { CategoriesListComponent } from './categories-list.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesListComponent
  },
  {
    path: ':name/:id',
    component: CategoryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesListRoutingModule {}
