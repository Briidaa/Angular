import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private router: Router) { }

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
      age: new FormControl('', [Validators.required]),
      farm_type: new FormControl('', [Validators.required]),
      period: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      amount_raised: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      refererral: new FormControl('', [Validators.required]),


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
     
      const formData = new FormData()
      formData.append('name', this.form.value.name);
      formData.append('email', this.form.value.email);
      formData.append('phoneNumber', this.form.value.phoneNumber);
      formData.append('password', this.form.value.name);
      formData.append('lastname', this.form.value.lastname);
      formData.append('role', this.form.value.role);
      formData.append('age', this.form.value.role);
      formData.append('farm_type', this.form.value.farm_type);
      formData.append('period', this.form.value.period);
      formData.append('location', this.form.value.location);
      formData.append('farm_description', this.form.value.farm_description);
      formData.append('amount_raised', this.form.value.amount_raised);
      formData.append('country', this.form.value.country);
      formData.append('refererral', this.form.value.refererral);
      formData.append('investor_description', this.form.value.investor_description);

      //console.log(this.form.value);

      if (this.form.value.role === "TENANT") {
        this.router.navigate(['/success']);
      }
      else {
        this.router.navigate(['/']);
      }
     
    }

  }

}
