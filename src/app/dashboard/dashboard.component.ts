import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  noteList = [];
  textInput = "";

  constructor() {

  }

  ngOnInit(): void {
    var previousListString = window.localStorage.getItem("noteList");
    if (previousListString != null && previousListString != "") {
      this.noteList = JSON.parse(previousListString)
    }
  }

  addNewNote() {
    this.noteList.unshift(this.textInput);
    var stringList = JSON.stringify(this.noteList);
    this.textInput = "";
    window.localStorage.setItem("noteList", stringList);
  }

}
