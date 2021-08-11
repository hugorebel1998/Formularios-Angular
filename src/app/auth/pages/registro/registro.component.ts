import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EmailValidateService } from 'src/app/shared/validation/email-validate.service';
import { emailV, nombreApellido, noPuedeserAmin } from 'src/app/shared/validation/validaciones';
import { ValidationServiceService } from 'src/app/shared/validation/validation-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  // nombreApellido: string = "([a-zA-ZÑñÁáÉéÍíÓóÚú]+) ([a-zA-ZÑñÁáÉéÍíÓóÚú]+)"
  // emailV: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  
  // noPuedeserAmin(campo: FormControl) {
  //   const valor: string = campo.value?.trim().toLowerCase();
  //   if (valor == 'admin') {

  //     return {
  //       noAdmin: true
  //     }
  //   }
  //   return null;
  // }


  // formularioAuth: FormGroup = this._formB.group({
  //   nombre : ['', [Validators.required, Validators.pattern(nombreApellido.trim())]],
  //   correo : ['', [Validators.required, Validators.pattern(emailV.trim())]],
  //   usuario: ['', [Validators.required, noPuedeserAmin]]
  // });
  formularioAuth: FormGroup = this._formB.group({
    nombre               : ['', [Validators.required, Validators.pattern(this._vs.nombreApellido.trim())]],
    correo               : ['', [Validators.required, Validators.pattern(this._vs.emailV.trim())],[this._eV] ],
    usuario              : ['', [Validators.required, this._vs.noPuedeserAmin]],
    contraseña           : ['', [Validators.required, Validators.minLength(6)]],
    confirmar_contraseña : ['', [Validators.required]],
  },
  {
    validators: [this._vs.confirmarContrasena('contraseña', 'confirmar_contraseña')]
  });

  

get mensajeEmail(): string {
  const errores = this.formularioAuth.get('correo')?.errors;

  if (errores?.required) {
    return 'El campo correo es obligatorio';
  }else if(errores?.pattern) {
    return 'El valor ingresado no tiene formato de correo';
  }else if(errores?.emailYaregistrado){
    return 'El correo electronico ya esta registrado';
  }else{
    return '';
  }

}

  constructor(
              private _formB: FormBuilder,
              private _vs:ValidationServiceService,
              private _eV:EmailValidateService
    ) { }

  ngOnInit(): void {
    this.formularioAuth.reset({
      nombre : 'Hugo Guillermo',
      correo : 'hugorebel1998@gmail.com',
      usuario: 'Hugo',
      contraseña: '123456',
      confirmar_contraseña: '123456'
    })

  }


  validadorCampo(campo: string) {
    return this.formularioAuth.get(campo)?.invalid && this.formularioAuth.get(campo)?.touched;

  }


  guardarDatos() {
    if (this.formularioAuth.invalid) {
      this.formularioAuth.markAllAsTouched();
      return;
    }
  }


}
