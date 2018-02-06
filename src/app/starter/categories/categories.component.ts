import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoryService]
})
export class CategoriesComponent implements OnInit {
  categories: any = [];
  isDataAvailable = false;
  rowsOnPage = 25;
  term: string;
  sortBy = 'title';
  sortOrder = 'desc';

  constructor(public categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories()
    .subscribe(
      response => {
        console.log(response);
        this.categories = response.categories;
        console.log(this.categories);
      },
      error => {
        console.log(error);
      },
      () => { }
    );
  }

}
