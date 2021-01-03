import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  det:any;
  Id:any;
  g:FormGroup;
  fee:any;

  constructor(private cserv:CommonService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.Id=this.route.snapshot.params['Id'];
    this.getStudent();

  }
 getStudent(){
  this.Id =  localStorage.getItem("Id");
  console.log(this.Id);
  this.cserv.getDetailsById(this.Id).subscribe((response)=>{
    this.det=response
   })
 }
 onClickFee(){
   this.Id=localStorage.getItem("Id");
  this.router.navigate(["fees",this.Id]);
 }

 onClickAttendance(){
  this.router.navigate(["attendance",this.Id]);

 }
 onClickResult(){
  this.router.navigate(["result",this.Id]);

 }

}

