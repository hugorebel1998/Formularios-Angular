import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // En caso de querer valores por defecto al iniciar el formulario
  /*valorAlInicio = {
    producto: 'LapTop',
    precio: 200,
    existencia: 1
  }
  */

  @ViewChild('miFormulario') miFormulario!: NgForm;

  // guardar(miFormulario:NgForm){
  //   console.log(miFormulario.value);
  // }

  productoValido() {
    return this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched
  }

  precioValido(): boolean {
    return this.miFormulario?.controls.precio?.value < 0 && this.miFormulario?.controls.precio?.touched;
  }


  guardar() {
    console.log("Posteo del formulario correcto");
    this.miFormulario.resetForm({
      producto: "Sin asignar",
      precio: 0,
      existencia: 0
    })
  }
}
