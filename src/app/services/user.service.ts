import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {CommonService} from './common.service';

@Injectable()
export class UserService {

  apiUrl = environment.apiUrl;
  authToken = localStorage.getItem('token');


  constructor(public http: HttpClient) {
  }

  login(body) {
    return this.http.post(this.apiUrl + 'users/login', body)
      .catch(CommonService.errorHandler);
  }

  storeUser(body) {
    let headers = new HttpHeaders();
    headers = headers.append('authorization', 'Bearer ' + this.authToken);

    return this.http.post(this.apiUrl + 'admin/users', body, {headers})
      .catch(CommonService.errorHandler);
  }

  getUsers() {
    let headers = new HttpHeaders();
    headers = headers.append('authorization', 'Bearer ' + this.authToken);

    return this.http.get(this.apiUrl + 'admin/users', {headers})
      .catch(CommonService.errorHandler);
  }

  getUserInfo() {
    let headers = new HttpHeaders();
    headers = headers.append('authorization', 'Bearer ' + this.authToken);

    return this.http.get(this.apiUrl + 'users/info', {headers})
      .catch(CommonService.errorHandler);
  }

}
