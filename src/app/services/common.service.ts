import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CommonService {

  public static errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error || 'server error');
  }

  constructor() {
  }

}
