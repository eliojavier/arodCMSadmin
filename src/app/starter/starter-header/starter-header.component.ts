import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-starter-header',
  templateUrl: './starter-header.component.html',
  styleUrls: ['./starter-header.component.css'],
  providers: [UserService]
})
export class StarterHeaderComponent implements OnInit {
  name = '';

  constructor(public userService: UserService,
              public router: Router) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.userService.getUserInfo()
    .subscribe(
      response => {
        console.log(response);
        this.name = response.user;
      },
      error => {
        console.log(error);
      },
      () => { }
    );
  }

  signOut() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

}
