import { ActivatedRoute } from '@angular/router';
import { CommonService } from './../common.service';
 import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {
Id:any;
fee:any;
  constructor(private cserv:CommonService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.Id=this.route.snapshot.params['Id'];
   this.getFee();

  }
  getFee(){

    this.cserv.getFees(this.Id).subscribe((response)=>{
      this.fee=response
    })

  }
}
