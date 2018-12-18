import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model: NgbDateStruct;
  date: {};
  bookingDetails:object={};
  payLoadCreated:boolean=false


  constructor(private calendar: NgbCalendar) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  ngOnInit() {
  }


  onTemplateBasedForm(){
    console.log(this.bookingDetails);

    this.payLoadCreated=true;
  }

  isValid() {

    return this.payLoadCreated;
  }

}
