import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this._formB.group({

    genero : ['M', Validators.required],
    notificaciones : [true, Validators.required],
    condiciones : [false, Validators.requiredTrue]
  });

  persona = {
    genero : 'F',
    notificaciones : true
  }



  constructor( 
    private _formB:FormBuilder
    ){
  }

  ngOnInit(){
    this.miFormulario.reset(this.persona);
  }


  guardar(){
   const formValue = this.miFormulario.value;
   delete formValue.condiciones;

   console.log(formValue);

   this.persona = formValue;

  }

}
