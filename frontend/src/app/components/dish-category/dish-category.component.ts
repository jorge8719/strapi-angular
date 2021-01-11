import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dish-category',
  templateUrl: './dish-category.component.html',
  styleUrls: ['./dish-category.component.scss']
})
export class DishCategoryComponent {

  @Input() title: string;

  isOpen = true;

  toggle(): void {
    this.isOpen = !this.isOpen
  }

}
