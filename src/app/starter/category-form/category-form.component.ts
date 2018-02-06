import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
  providers: [CategoryService]
})
export class CategoryFormComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
              public categoryService: CategoryService,
              public router: Router) {

    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submitCategoryForm() {
    const body = {
      name: this.categoryForm.value.name
    };
    this.categoryService.storeCategory(body)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        },
        () => {
          this.router.navigateByUrl('admin/categories');
        }
      );
  }

}
