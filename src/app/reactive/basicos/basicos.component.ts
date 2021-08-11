import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  /*Una manera de trabajar con Formulario reactivo es utilizando FormControl
  como se muestra en este ejemplo */
   /*miFormulario: FormGroup = new FormGroup({
     producto : new FormControl('LapTop'),
     precio : new FormControl(0),
     existencia : new FormControl(0),
   });
   */

   /*Segunda manera de trabajar con Formularrio rectivo es por medio de un servicio FormBuilder 
   como se muentra en este ejemplo*/
    miFormulario: FormGroup = this._formB.group({
    producto  : [, [Validators.required, Validators.minLength(3)]], //Uso de validacion sincrono  como si fuera una funcion sincrona en forma nativa en JS
    precio    : [, [Validators.required, Validators.min(0)] ],
    existencia: [, [Validators.required, Validators.min(0)]]
    })
   


  constructor(
    private _formB:FormBuilder
  ){

  }


  validacionCampo(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
