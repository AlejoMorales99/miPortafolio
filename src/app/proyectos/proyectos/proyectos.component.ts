import { Component, OnInit } from '@angular/core';
import { modeloProyectos } from 'src/app/models/modeloProyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public searchText: any;
  public proyectos: Array<modeloProyectos> = [];

  constructor() {
    this.proyectos = [
      new modeloProyectos('../../../assets/imgs/CRUD.PNG', 'REGISTO DE CLIENTES', 'CRUD SENCILLO DE REGISTRAR CLIENTES (LARAVEL-ANGULAR) ', 'ir al proyecto','http://crudusuarios.epizy.com/'),
      new modeloProyectos('../../../assets/imgs/listaDeTareas.PNG', 'LISTA DE TAREAS', 'LISTA PARA REGISTRAR TUS TAREAS IMPORTANTES (LARAVEL-ANGULAR) ', 'ir al proyecto','http://apilaravel.epizy.com/'),
    ];
  }
  ngOnInit(): void {
    window.addEventListener('scroll', function()  {
      let elements = document.getElementsByClassName('scroll-content');
      let screenSize = window.innerHeight;

        for(var i = 0; i < elements.length; i++) {
          let element = elements[i];

          if(element.getBoundingClientRect().top < screenSize) {
            element.classList.add('visible');
          } else {
            element.classList.remove('visible');
          }
        }
    });
  }


}
