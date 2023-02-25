import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.css']
})
export class InteresesComponent implements OnInit {

  miModal: any;

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




  abrirModal() {
    this.miModal.show();
  }

}
