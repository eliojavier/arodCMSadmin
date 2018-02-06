import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable()
export class CanManageUsersGuard implements CanActivate {

  constructor(public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('role') === 'superadmin' ||
      localStorage.getItem('role') === 'editor') {
      return true;
    } else {
        this.router.navigateByUrl('login');
    }
    return false;
  }
}
