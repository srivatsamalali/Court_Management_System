import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {
  fee:any;
 

  constructor(private cserv:CommonService) { }

  ngOnInit(): void {
    this.getFee();
  }
  getFee(){
    this.cserv.getFees().subscribe((response)=>{
      this.fee=response
    })
  }

}
