import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {CommonService} from './common.service';

@Injectable()
export class UserService {
  apiUrl = environment.apiUrl;
  authToken: string;

  constructor(public http: HttpClient) {
    this.authToken = localStorage.getItem('token');
  }

  login(body) {
    const headers = new HttpHeaders();
    headers.append('authorization', 'Bearer ' + this.authToken);

    return this.http.post(this.apiUrl + 'users/login', body, {headers})
      .catch(CommonService.errorHandler);
  }

}
