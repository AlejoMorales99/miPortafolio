import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  mensaje: string = "";

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



    setTimeout(function () {
      document.getElementById('maquina')?.classList.remove('maquinaBorder');
    }, 6000);




  }







}
