import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishComponent } from './components/dish/dish.component';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishCategoryComponent } from './components/dish-category/dish-category.component';
import { DishAllergensComponent } from './components/dish-allergens/dish-allergens.component';
import { HeaderComponent } from './shared/header/header.component';
import { DishDetailComponent } from './components/dish-detail/dish-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    DishComponent,
    DishListComponent,
    DishCategoryComponent,
    DishAllergensComponent,
    DishDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
