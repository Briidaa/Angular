import { Component, OnInit } from '@angular/core';
import { TenantService } from 'src/app/Services/tenant.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent implements OnInit {

  allTenant: any;

  constructor(private tenantService: TenantService, private ngxLoader: NgxUiLoaderService ) { }

  ngOnInit(): void {
    this.getTenants();
  }

  getTenants(){
    this.tenantService.getAllTenant()
    .subscribe({
      next: res =>{
        this.allTenant = res;
        console.log(this.allTenant);
        
      },
      error: err =>{
        console.log(err);
        
      }
    })
  }

  checkedin(id: any){
    this.ngxLoader.start();
    let currentdate = new Date();

    let time = + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();

    let data = {
      time_in: time,
      checkedin: true,
      userid: id
    }

    console.log(data);

    this.tenantService.checkin(data)
    .subscribe({
      next: res =>{
        console.log(res);
        this.ngxLoader.stop();
        this.ngOnInit();

      }, error: err =>{
        this.ngxLoader.stop();
        console.log(err);
        
      }
    })
    
  }

  checkedout(id: any){
    this.ngxLoader.start();
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
        this.ngxLoader.stop();
        this.ngOnInit();

      }, error: err =>{
        this.ngxLoader.stop();
        console.log(err);
        
      }
    })
  }

}
