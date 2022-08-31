import { Component, OnInit } from '@angular/core';
import { VisitorService } from 'src/app/Services/visitor.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  allVisitor: any;

  constructor(private visitorService: VisitorService) { }

  ngOnInit(): void {
    this.getVisitors();
  }

  getVisitors(){
    this.visitorService.getCheckinVisitors()
    .subscribe( res => {
      this.allVisitor = res;
      console.log(this.allVisitor);
      
    })
  }

  checkedout(id: any){

    let currentdate = new Date();

    let time = + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();

    let data = {
      time_in: time,
      checkedout: true,
      id: id
    }

    console.log(data);

    this.visitorService.checkoutVisitor(data)
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
