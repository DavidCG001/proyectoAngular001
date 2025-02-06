import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoAngular001';
  nombre: string = 'David';
  edad: number = 28;
  fumadorBool = true;

  fumador(){
    return this.fumadorBool? 'Sí es fumador' : 'No es fumador';
  }

  notas = [1,2,3,4,5,6,7,8,9,10];

  provincias = [{id: 1, nombre: 'Alicante'}, {id: 2, nombre: 'Valencia'}, {id: 3, nombre: 'Castellón'}];

  pulsarBoton(){
    console.log('Has pulsado el botón');
  }

  contador = 0;

  incrementarContador(){
    this.contador++;
  }

  decrementarContador(){
    this.contador--;
  }

}
