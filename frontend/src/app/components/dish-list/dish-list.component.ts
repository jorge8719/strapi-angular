import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {

  error = null;
  dishes = [];
  sortDishes = {}


  sortResponse (response) {
    const orderedDishes = {}
    this.dishes = response.data;

    this.dishes.forEach((el,i) => {
      const { name } = el.dishes_category;
      if(!name) return;
      if(!orderedDishes[name])orderedDishes[name] = [];
      orderedDishes[name].push(this.dishes[i])
    });

    this.sortDishes = orderedDishes

  }

  async ngOnInit(): Promise<void> {
    try {
      const response = await axios.get('http://localhost:1337/dishes');
      this.sortResponse(response);
    } catch (error) {
      this.error = error;
    }
  }

}
