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
      email: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      phoneNumber: new FormControl('', Validators.required),
      lastname: new FormControl('', [Validators.minLength(3), Validators.required]),
      age: new FormControl('', [Validators.required]),
      farm_type: new FormControl('', [Validators.required]),
      period: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      farm_description: new FormControl('', [Validators.required])
    });
  }

  submit() {
    
  }
}
