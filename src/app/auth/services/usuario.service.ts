import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService  implements AsyncValidator{

  constructor( private _http:HttpClient) { }
  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const usuario = control.value;

    return this._http.get<[]>(`http://localhost:3000/usuarios?q=${usuario}`)
    .pipe(
      delay(3000),
      map(userR =>{
        if(userR.length === 0){
          return null;
        }else{
          return { Usurio_Usado: true}
        }
      })
    )
  }
}
