import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.scss']
})
export class AddVisitorComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      id_no: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      phoneNumber: new FormControl('', Validators.required),
      lastname: new FormControl('', [Validators.minLength(3), Validators.required])
    });
  }

  submit() {
    
  }
}
