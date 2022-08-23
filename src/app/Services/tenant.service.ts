import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  BaseUrl = environment.devbaseUrl+'tenant/';
  
  constructor(private http: HttpClient) { }

  getAllTenant(): Observable<any>{
    return this.http.get(this.BaseUrl+"/all");
  }

  checkin(data: any): Observable<any>{
    return this.http.put(this.BaseUrl+"/checkedin",data);
  }

  checkout(data: any): Observable<any>{
    return this.http.put(this.BaseUrl+"/checkedout",data);
  }

  allCheckedIn(): Observable<any>{
    return this.http.get(this.BaseUrl+"/checkedin/all");
  }
}
