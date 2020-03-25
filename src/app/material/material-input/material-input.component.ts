import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.sass']
})
export class MaterialInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  keyUp($event) {
    console.log('KeyUp', $event);
  }

  onBlur($event) {
    console.log('onBlur', $event);
  }

}
