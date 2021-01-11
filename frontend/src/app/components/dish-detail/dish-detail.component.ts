import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {
  private params: any;
  id: number;
  data: [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.fetchData();
    });
  }

  async fetchData(): Promise<void> {
    try {
      const response = await axios.get(`http://localhost:1337/dishes/${this.id}`);
      this.data = response.data
    } catch (error) {
      console.log('error')
    }
    console.log(this.data)
  }
}
