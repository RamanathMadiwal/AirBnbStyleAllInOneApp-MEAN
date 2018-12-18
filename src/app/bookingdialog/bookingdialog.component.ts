import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bookingdialog',
  templateUrl: './bookingdialog.component.html',
  styleUrls: ['./bookingdialog.component.css']
})
export class BookingdialogComponent implements OnInit {

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
