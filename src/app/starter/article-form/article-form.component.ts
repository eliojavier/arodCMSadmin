import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],
  providers: [ArticleService]
})
export class ArticleFormComponent implements OnInit {
  articleForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
              public articleService: ArticleService,
              public router: Router) {

    this.articleForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submitArticleForm() {
    const body = {
      title: this.articleForm.value.title,
      body: this.articleForm.value.body
    };
    this.articleService.storeArticle(body)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        },
        () => {
          this.router.navigateByUrl('admin/articles');
        }
      );
  }

}
