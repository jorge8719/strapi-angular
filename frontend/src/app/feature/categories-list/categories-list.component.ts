import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories: [];

  ngOnInit(): void {
    this.fetchData()
  }


  async fetchData(): Promise<void> {
    try {
      const response = await axios.get(`http://localhost:1337/dishes-categories/`);
      this.categories = response.data
    } catch (error) {
      console.log('error')
    }
    console.log(this.categories)
  }

}
