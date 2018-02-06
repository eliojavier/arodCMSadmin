import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers: [UserService]
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
              public userService: UserService,
              public router: Router) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submitUserForm() {
    const body = {
      name: this.userForm.value.name,
      email: this.userForm.value.email
    };
    this.userService.storeUser(body)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        },
        () => {
          this.router.navigateByUrl('admin/users');
        }
      );
  }

}
