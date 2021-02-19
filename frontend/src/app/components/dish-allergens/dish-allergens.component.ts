import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DishAllergenesInterface } from 'src/app/model/dish-allergenes-interface';

@Component({
  selector: 'app-dish-allergens',
  templateUrl: './dish-allergens.component.html',
  styleUrls: ['./dish-allergens.component.scss']
})
export class DishAllergensComponent {

  @Input() data: Array<DishAllergenesInterface>;


}
