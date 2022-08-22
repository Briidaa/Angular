import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BaseUrl = environment.devbaseUrl+'auth/';
  
  constructor(private http: HttpClient) { }

  userRegister(data: any): Observable<any>{
    return this.http.post(this.BaseUrl+"register",data);
  }

  userLogin(data: any): Observable<any>{
    return this.http.post(this.BaseUrl+"login",data);
  }
}
