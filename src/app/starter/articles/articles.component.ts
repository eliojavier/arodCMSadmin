import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ArticleService]
})
export class ArticlesComponent implements OnInit {
  articles: any = [];
  isDataAvailable = false;
  rowsOnPage = 25;
  term: string;
  role: string;
  sortBy = 'title';
  sortOrder = 'desc';

  constructor(public articleService: ArticleService) {

  }

  ngOnInit() {
    this.getArticles();
    this.getUserRole();
  }

  getUserRole() {
    this.role = localStorage.getItem('role');
  }

  getArticles() {
    this.articleService.getArticles()
      .subscribe(
        response => {
          console.log(response);
          this.articles = response.articles;
        },
        error => {
          console.log(error);
        },
        () => {
          this.isDataAvailable = true;
        }
      );
  }

}
