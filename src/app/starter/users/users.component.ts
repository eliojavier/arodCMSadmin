import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  users: any = [];
  isDataAvailable = false;
  rowsOnPage = 25;
  term: string;
  sortBy = 'title';
  sortOrder = 'desc';

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(
        response => {
          console.log(response);
          this.users = response.users;
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
