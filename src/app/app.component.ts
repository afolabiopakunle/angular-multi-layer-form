import { Component, OnInit, VERSION } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  mainForm: FormGroup;
  constructor() {}

  ngOnInit() {

  }
}
