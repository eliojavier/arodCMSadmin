import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  displayedColumns = ['title', 'body'];
  dataSource: MatTableDataSource<Article>;
  articles: Article[] = [];
  isDataAvailable = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public articleService: ArticleService) {

  }

  ngOnInit() {
    this.articleService.getArticles()
    .subscribe(
      response => {
        this.articles = response.articles;
        console.log(this.articles);
        console.log(this.dataSource);
        for (let article of this.articles) {
          this.articles.push(createNewArticle(article.title, article.body));
        }
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(this.articles);
      },
      error => {
        console.log(error);
      },
      () => {
        this.isDataAvailable = true;
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

function createNewArticle(title, body): Article {
  return {
    title: title,
    body: body
  };
}

export interface Article {
  title: string;
  body: string;
}
