import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list.component';
import { CategoriesListRoutingModule } from './categories-list-routing.module';
import { CategoriesContainerComponent } from 'src/app/components/categories-container/categories-container.component';
import { CategoryItemComponent } from 'src/app/components/categories-container/category-item/category-item.component';



@NgModule({
  declarations: [CategoriesListComponent, CategoriesContainerComponent, CategoryItemComponent],
  imports: [
    CommonModule,
    CategoriesListRoutingModule
  ],
  exports: [CategoriesListComponent]
})
export class CategoriesListModule { }
