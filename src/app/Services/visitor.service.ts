import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  BaseUrl = environment.devbaseUrl+'admin/';
  
  constructor(private http: HttpClient) { }

  addVisitor(data: any): Observable<any>{
    return this.http.post(this.BaseUrl+'visitor/add',data);
  }

  getCheckinVisitors():Observable<any>{
    return this.http.get(this.BaseUrl+"visitor/checkedin");
  }

  checkoutVisitor(data: any): Observable<any>{
    return this.http.put(this.BaseUrl+"visitor/checkout",data);
  }
}
