import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {UserService} from '../services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLogging = false;

  constructor(public router: Router,
              public formBuilder: FormBuilder,
              public userService: UserService) {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    this.isLogging = true;
    const body = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.userService.login(body)
      .subscribe(
        response => {
          console.log(response);
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role[0].name);
          this.router.navigateByUrl('/dashboard');
        },
        error => {
          console.log(error);
          this.isLogging = false;
        },
        () => {
          this.isLogging = false;
        }
      );
  }
}
