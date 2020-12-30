import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { FeesComponent } from './fees/fees.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HomeComponent,
    FeesComponent,
    AttendanceComponent,
    ResultComponent
  ],
  imports:  [
    BrowserModule,HttpClientModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forRoot([
      {path:"details", component:  DetailsComponent},
      {path:"fees", component:  FeesComponent},
      {path:"attendance", component:  AttendanceComponent},
      {path:"result", component:ResultComponent},
      {path:"",  redirectTo:"home" ,pathMatch:"full"},
      {path:"home",component:HomeComponent}

    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
