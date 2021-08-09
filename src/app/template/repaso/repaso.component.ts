import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Alumno {
  nombre: string;
  apellido: string;
  edad: number;
  genero: string;
  notifiaciones : boolean;
  materias: Materia[];
}

interface Materia {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-repaso',
  templateUrl: './repaso.component.html',
  styles: [
  ]
})
export class RepasoComponent {

  @ViewChild('miFormulario') miFormulario!:NgForm;

  nombre: string = "Ingresar nombre";
  apellido: string = "Engresar apelldio";
  agregar: string = "Agregar materia";
  terminos: boolean = false;
  materiaNueva: string = '';


  alumno: Alumno = {
    nombre: '',
    apellido: '',
    edad: 0,
    genero : '',
    notifiaciones: true,
    materias: [
      { id: 1, nombre: 'español' },
      { id: 2, nombre: 'matematicas' }
    ]
  }

  guardar() {
    console.log("Formulario posteado")
    console.log(this.miFormulario.value);

 
  }

  agregarMateria(){
    console.log('nueva Materia-agregada');

    const newmateria:Materia = 
    {
     id: this.alumno.materias.length +1,
     nombre: this.materiaNueva
    }
    this.alumno.materias.push(newmateria);
    this.materiaNueva = '';
  }

  eliminarMateria(index:number){
    this.alumno.materias.splice(index, 1);

  }
}
