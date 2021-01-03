import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  Id:any;
  att:any;
  constructor(private aserv:CommonService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.Id=this.route.snapshot.params['Id'];
    this.getAttendance();
  }
  getAttendance(){
    this.aserv.getAttendanceDetails(this.Id).subscribe((response)=>{
      this.att=response
    })
  }

}
