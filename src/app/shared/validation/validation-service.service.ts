import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationServiceService {

  nombreApellido: string = "([a-zA-ZÑñÁáÉéÍíÓóÚú]+) ([a-zA-ZÑñÁáÉéÍíÓóÚú]+)";
  emailV: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  constructor() { }

  noPuedeserAmin(campo: FormControl): ValidationErrors | null {
    const valor: string = campo.value?.trim().toLowerCase();
    if (valor == 'admin') {

      return {
        noAdmin: true
      }
    }
    return null;
  }
  confirmarContrasena(campo1: string, campo2: string) {

    //Funcion Elouet
    return (control: AbstractControl): ValidationErrors | null => {

      const pass1 = control.get(campo1)?.value;
      const pass2 = control.get(campo2)?.value;

      if (pass1 !== pass2) {
        control.get(campo2)?.setErrors({ noIguales: true});
      return { noIguales: true}
      }else{
        control.get(campo2)?.setErrors( null);
        return null;
      } 
    }
  }
}
