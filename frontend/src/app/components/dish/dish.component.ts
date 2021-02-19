import { Component, Input } from '@angular/core';
import { DishInterface } from 'src/app/model/dish-interface';



@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})

export class DishComponent  {
  @Input() data: DishInterface;

}
