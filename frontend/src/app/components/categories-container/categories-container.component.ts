import { Component, Input } from '@angular/core';
import { Category } from '../../model/category.model';



@Component({
  selector: 'app-categories-container',
  templateUrl: './categories-container.component.html',
  styleUrls: ['./categories-container.component.scss']
})
export class CategoriesContainerComponent  {

  @Input() categories: Array<Category>;


}
