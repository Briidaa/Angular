import { Component, OnInit } from '@angular/core';
import { TenantService } from 'src/app/Services/tenant.service';

@Component({
  selector: 'app-checkedin',
  templateUrl: './checkedin.component.html',
  styleUrls: ['./checkedin.component.scss']
})
export class CheckedinComponent implements OnInit {

  tenantsIn: any;

  constructor(private tenantService: TenantService) { }

  ngOnInit(): void {
    this.allCheckedIn();
  }

  allCheckedIn(){
    this.tenantService.allCheckedIn()
    .subscribe( res =>{
      this.tenantsIn = res
    })
  }

  checkedout(id: any){

    let currentdate = new Date();

    let time = + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();

    let data = {
      time_in: time,
      checkedin: false,
      userid: id
    }

    console.log(data);

    this.tenantService.checkout(data)
    .subscribe({
      next: res =>{
        console.log(res);
        this.ngOnInit();

      }, error: err =>{
        console.log(err);
        
      }
    })
  }

}
