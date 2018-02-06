import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {CommonService} from './common.service';

@Injectable()
export class ArticleService {
  apiUrl = environment.apiUrl;
  authToken = localStorage.getItem('token');
  role = localStorage.getItem('role');

  constructor(public http: HttpClient) {

  }

  getArticles() {
    let headers = new HttpHeaders();
    headers = headers.append('authorization', 'Bearer ' + this.authToken);

    if (this.role === 'writer') {
      return this.http.get(this.apiUrl + 'articles', {headers})
        .catch(CommonService.errorHandler);
    }

    return this.http.get(this.apiUrl + 'admin/articles', {headers})
      .catch(CommonService.errorHandler);
  }

  storeArticle(body) {
    let headers = new HttpHeaders();
    headers = headers.append('authorization', 'Bearer ' + this.authToken);

    return this.http.post(this.apiUrl + 'articles', body, {headers})
      .catch(CommonService.errorHandler);
  }

}
