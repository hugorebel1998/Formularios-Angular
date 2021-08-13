import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CaposValidosService } from '../../services/capos-validos.service';
import { EmailService } from '../../services/email.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this._fB.group({
    nombre               : ['', [Validators.required, Validators.pattern(this._cV.nombre.trim())]],
    correo               : ['', [Validators.required, Validators.pattern(this._cV.correo.trim())], [this._emS] ],
    usuario              : ['', [Validators.required, Validators.pattern(this._cV.usuario.trim())], [this._userS]],
    contraseña           : ['', [Validators.required, Validators.minLength(6)]],
    confirmar_contraseña : ['', [Validators.required]]
  }, 
  {
    validators           : [this._cV.confirmarContraseña('contraseña', 'confirmar_contraseña')]
  });


  get menssageNombre(){
    const menNombre = this.miFormulario.get('nombre')?.errors;
    if(menNombre?.required){
      return 'El campo Nombre y Apellido es requerido'
    }else if(menNombre?.pattern){
      return 'El campo Nombre Apellido no cumple con los parametros';
    }else{
      return null;
    }
  }

get menssageEmail(){
  const menEmail = this.miFormulario.get('correo')?.errors;

  if(menEmail?.required){
    return 'El campo Correo Electrónico es requerido';
  }else if(menEmail?.pattern){
    return 'El correo electrónico no es valdio';
  }else if(menEmail?.Email_ya_ocupado){
    return 'El correo electrónico ya es en uso';
  }else{
  return null;
  }
}

get menssageUsuario(){

  const menUsuario = this.miFormulario.get('usuario')?.errors;
  if(menUsuario?.required){
    return 'El campo Usuario es requerido';
  }else if(menUsuario?.pattern){
    return 'El usuario no cumple con los parametros';
  }else if(menUsuario?.Usurio_Usado){
    return 'El usuario ya esta en uso';
  }else{
    return null;
  }

}


  constructor(private _fB   : FormBuilder,
              private _cV   : CaposValidosService,
              private _emS  : EmailService,
              private _userS: UsuarioService
    ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre  :'Hugo Guillermo',
      correo  :'hugorebel1998@gmail.com',
      usuario :'Hugo1998',
      contraseña :'123456',
      confirmar_contraseña: '123456'
    })
  }


validarCampo(campo: string){
  return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
}



  guardar(){
    
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      this.miFormulario.pending;
       return;
    }
    console.log(this.miFormulario);
  }

}


