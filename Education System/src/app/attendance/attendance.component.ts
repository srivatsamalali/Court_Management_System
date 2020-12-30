import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  att:any;
  constructor(private aserv:CommonService) { }

  ngOnInit(): void {
    this.getAttendance();
  }
  getAttendance(){
    this.aserv.getAttendanceDetails().subscribe((response)=>{
      this.att=response
    })
  }

}
