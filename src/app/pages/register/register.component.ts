import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  haveData: boolean = false;
  message = '';
  isMessage: boolean = false;
  passwordMessage = '';
  password_matched: boolean = false;
  strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private ngxLoader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.create();
  }

  create() {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(250), Validators.email]),
      phoneNumber: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
      confirmPasswd: new FormControl('', [Validators.minLength(8), Validators.required]),
      lastname: new FormControl('', [Validators.minLength(3), Validators.required]),
      role: new FormControl('', [Validators.required]),
      rank: new FormControl('', [Validators.required]),
      id_no: new FormControl('', [Validators.required]),
      stuff_no: new FormControl('', [Validators.required]),
      building: new FormControl('', [Validators.required])
    });

  }



  get f() {
    return this.form.controls;
  }




  passwordMatch(): boolean {
    if (this.form.value.confirmPasswd === this.form.value.password) {
      return true;
    }
    else {
      this.passwordMessage = "Passwords do not match";
      return false;
    }

  }

  fieldsWithData(): boolean {
    if ((this.form.value.name && this.form.value.lastName) && (this.form.value.email && this.form.value.password) && (this.form.value.confirm_password) !== "") {
      return true;
    }
    else {
      return false;
    }

  }

  messages(): void {
    if (this.fieldsWithData()) {
      this.message = "";
    }
    else {
      this.message = "Fields cannot be empty"
    }
  }

  ifTENANT(): Boolean {
    if (this.form.value.role === "TENANT") {
      return true;
    }
    else {
      return false;
    }
  }

  ifADMIN(): Boolean {
    if (this.form.value.role === "ADMIN") {
      return true;
    }
    else {
      return false;
    }
  }

  submit(): void {
    if (this.passwordMatch()) {
      this.messages();

      this.ngxLoader.start();

      console.log(this.form.value);

      this.userService.userRegister(this.form.value)
      .subscribe({ next: res => {
        console.log(res);
        
        Swal.fire(
          {
            title: 'Successful Registered',
            text: 'Welcome',
            timer: 4000,
            showConfirmButton: false,
            color: 'green'
          }
        )

        Swal.update({
          icon: 'success'
        })

        if (this.form.value.role === "TENANT") {
          this.router.navigate(['/success']);
        }
        else {
          this.router.navigate(['/']);
        }
        this.ngxLoader.stop();
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

  }

}
