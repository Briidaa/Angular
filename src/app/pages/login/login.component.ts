import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  password1Shown: boolean = false;
  password2Shown: boolean = false;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    })
  } 

  onSubmit() {
    
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
