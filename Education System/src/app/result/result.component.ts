import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  res:any;

  constructor(private cserv:CommonService) { }

  ngOnInit(): void {
    this.getResults();
  }
getResults(){
  this.cserv.getResult().subscribe((response)=>{
    this.res=response
  })
}
}
