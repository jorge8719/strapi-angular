import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit{

  constructor(private route: ActivatedRoute) {}
  @Input() category: Category;

  id = null;
  category2 = null;
  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data)
  })
    this.route.params.subscribe(params => {
      this.category2 = params['category']
       this.id = params['id']; // (+) converts string 'id' to a number
     console.log(this.id)
    });
  }
}
