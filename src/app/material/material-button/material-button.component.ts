import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-button',
  templateUrl: './material-button.component.html',
  styleUrls: ['./material-button.component.sass']
})
export class MaterialButtonComponent implements OnInit {

  constructor() { }

  boton = {
    valido: false
  };

  onClick($event) {
    console.log('Evento onClic', $event);
  }

  ngOnInit() {
  }

}
