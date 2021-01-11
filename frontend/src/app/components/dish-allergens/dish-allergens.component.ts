import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-allergens',
  templateUrl: './dish-allergens.component.html',
  styleUrls: ['./dish-allergens.component.scss']
})
export class DishAllergensComponent  {

  @Input() name: string;
  @Input() media: string;

}
