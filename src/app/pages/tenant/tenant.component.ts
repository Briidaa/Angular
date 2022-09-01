import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/Services/excel.service';
import { TenantService } from 'src/app/Services/tenant.service';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent implements OnInit {

  allTenant: any;

  constructor(private tenantService: TenantService, private excelService: ExcelService) { }

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
        this.ngOnInit();

      }, error: err =>{
        console.log(err);
        
      }
    })
    
  }

  checkedout(id: any){

    let currentdate = new Date();

    let time = + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();

    let data = {
      time_out: time,
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

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.allTenant, 'All Tenants');
  }

}
