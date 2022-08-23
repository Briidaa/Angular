import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VisitorService } from 'src/app/Services/visitor.service';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.scss']
})
export class AddVisitorComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private visitorService: VisitorService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      id_no: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      phoneNumber: new FormControl('', Validators.required),
      lastname: new FormControl('', [Validators.minLength(3), Validators.required])
    });
  }

  submit() {
    let currentdate = new Date();

    let time = + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();

    const data = {
      name: this.form.value.name,
      lastname: this.form.value.lastname,
      id_no: this.form.value.id_no,
      phoneNumber: this.form.value.phoneNumber,
      time_in: time,
      time_out: null,
      checkedout: false
    }

    console.log(data);

    this.visitorService.addVisitor(data)
    .subscribe({
      next: res =>{
        alert('Visitor Add');
      },error: err =>{
        alert(err);
      }
    })
    
  }
}
