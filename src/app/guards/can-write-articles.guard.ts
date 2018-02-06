import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable()
export class CanWriteArticlesGuard implements CanActivate {
  constructor(public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('role') === 'superadmin' ||
      localStorage.getItem('role') === 'writer') {
      return true;
    } else {
        this.router.navigateByUrl('login');
    }
    return false;
  }
}
