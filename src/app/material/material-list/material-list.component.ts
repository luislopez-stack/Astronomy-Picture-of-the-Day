import { Component, OnInit, asNativeElements, Output, EventEmitter } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';
import { ClassEstudiante } from '../../shared/model/class-estudiante';


@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.sass']
})
export class MaterialListComponent implements OnInit {

  estudiante1: Estudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;
  estudiante4: ClassEstudiante;
  readonly DEFAULT_PICTURE = 'https://holmesbuilders.com/wp-content/uploads/2016/12/male-profile-image-placeholder.png';
  listaEstudiantes: Estudiante[];


  constructor() { }

  ngOnInit() {
    console.log('Inicializando modelo estudiante');
    this.estudiante1 = {
      id: 1,
      nombre: 'Yotung',
      ciudad: 'Peru',
    };

    this.estudiante2 = {
      id: 2,
      nombre: 'Romo',
      ciudad: 'Mexico',
      fotoURL: 'https://pwco.com.sg/wp-content/uploads/Generic-Profile-Placeholder-v3.png',
    };

    this.estudiante3 = {
      id: 3,
      nombre: 'Rodriguez',
      ciudad: 'Uruguay',
    };

    this.estudiante4 = new ClassEstudiante(4, 'Corona', 'Mexico');
    console.log('Edad: ' , this.estudiante4.getEdad());

    this.listaEstudiantes = [
      this.estudiante1,
      this.estudiante2,
      this.estudiante3
    ];

  }

}
