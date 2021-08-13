import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CaposValidosService{

  nombre : string = '([a-zA-ZÁáÉéÍíÓóÚú]+) ([a-zA-ZÁáÉéÍíÓóÚú]+)';
  correo : string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  usuario: string = '^[a-zA-Z0-9 ]+$';


  confirmarContraseña(campo1: string, campo2: string) {
    return (formVontraseña: AbstractControl): ValidationErrors | null => {

      const contraseña1 = formVontraseña.get(campo1)?.value;
      const contraseña2 = formVontraseña.get(campo2)?.value;

      if (contraseña1 !== contraseña2) {
        formVontraseña.get(campo2)?.setErrors({ Contraseñas_invalidad: true })
        return { Contraseñas_invalidad: true }
      } else {
        formVontraseña.get(campo2)?.setErrors(null)
        return { Contraseñas_Validas : null}
      }
    }
  }

  //Validar si hay un correo electronico igaul en la base de datos

}
