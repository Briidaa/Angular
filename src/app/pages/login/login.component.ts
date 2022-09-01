import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  password1Shown: boolean = false;
  password2Shown: boolean = false;

  constructor(private fb:FormBuilder, private router: Router, private userService: UserService, private ngxLoader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    })
  } 

  onSubmit() {
    this.ngxLoader.start();
    this.userService.userLogin(this.form.value)
    .subscribe({ next: res => {
      console.log(res);
      
      Swal.fire(
        {
          title: 'LoggedIn',
          text: 'Welcome',
          timer: 4000,
          showConfirmButton: false,
          color: 'green'
        }
      )

      Swal.update({
        icon: 'success'
      })

      if (res.user.role === "ADMIN") {
        this.router.navigate(['/admin']);
      }
      else {
        Swal.fire(
          {
            title: 'TENANT NOT ALLOWED',
            text: '',
            timer: 4000,
            showConfirmButton: false,
            color: 'lightblue'
          }
        )

        Swal.update({
          icon: 'info'
        })
        this.router.navigate(['/']);
      }
      this.ngxLoader.stop()
    }, error: err=> {
      this.ngxLoader.stop();
      Swal.fire(
        {
          icon: 'error',
          title: err.error.message,
          showConfirmButton: false,
          timer: 1900,
          width: '300px'
        }
      )
    }})
  }

  get f() {
    return this.form.controls;
  }
  submit() {
    //console.log(this.form.value);
  }
  get email() {
    return this.form.get('email');

  }
  get password() {
    return this.form.get('password');
  }

  //show password

  togglePassword(num: any) {
    const icon = document.getElementById('icon');
    if (num == 1) {
      this.password1Shown = !this.password1Shown;
      if (this.password1Shown)
        if (num == 2) {
          this.password2Shown = !this.password2Shown;
        }
    }
  }
}
