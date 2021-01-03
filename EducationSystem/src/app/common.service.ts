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
getFees(Id:any):Observable<any>{
  return this.httpClient.get<any>("http://localhost:3004/fees/"+Id);
}
getAttendanceDetails(Id:any):Observable<any>{
  return this.httpClient.get<any>("http://localhost:3004/attendance/"+Id);
}
getResult(Id:any):Observable<any>{
  return this.httpClient.get<any>("http://localhost:3004/result/"+Id);
}
}
