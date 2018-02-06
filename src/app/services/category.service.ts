import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {CommonService} from './common.service';

@Injectable()
export class CategoryService {
  apiUrl = environment.apiUrl;
  authToken = localStorage.getItem('token');

  constructor(public http: HttpClient) {

  }

  getCategories() {
    let headers = new HttpHeaders();
    headers = headers.append('authorization', 'Bearer ' + this.authToken);

    return this.http.get(this.apiUrl + 'admin/categories', {headers})
      .catch(CommonService.errorHandler);
  }

  storeCategory(body) {
    let headers = new HttpHeaders();
    headers = headers.append('authorization', 'Bearer ' + this.authToken);

    return this.http.post(this.apiUrl + 'admin/categories', body, {headers})
      .catch(CommonService.errorHandler);
  }

}
