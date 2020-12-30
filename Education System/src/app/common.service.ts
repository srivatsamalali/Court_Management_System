import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient:HttpClient) { }
  getDetailsById(Id:any):Observable<any>{
    return this.httpClient.get<any>("http://localhost:3004/_details/"+Id);
}
getFees(){
  return this.httpClient.get("http://localhost:3004/fees");
}
getAttendanceDetails(){
  return this.httpClient.get<any>("http://localhost:3004/attendance");
}
getResult(){
  return this.httpClient.get<any>("http://localhost:3004/result");
}
}
