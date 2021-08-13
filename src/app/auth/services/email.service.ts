import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService implements AsyncValidator {

  constructor(private _httpE: HttpClient) { }

  validate(correo: AbstractControl): Observable<ValidationErrors | null> {

    const email = correo.value;
    return this._httpE.get<[]>(`http://localhost:3000/usuarios?q=${email}`)
      .pipe(
        delay(3000),
        map(respuestaEmail => {
          if (respuestaEmail.length === 0) {
             return null;
          }else{
            return { Email_ya_ocupado : true }
          }
        })
      )
  }
}
