import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidateService implements AsyncValidator {

  constructor(private _http: HttpClient) { }
  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;

    return this._http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
    .pipe(
      delay(3000),
        map(resp => {
          // return ( resp.l == 0 )
          //   ? null
          //   : { emailTomado: true }
          if (resp.length === 0) {
            return null;
          } else {
            return { emailYaregistrado: true}
          }

        })
      );
  }
}

