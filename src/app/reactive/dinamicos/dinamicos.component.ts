import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this._formB.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this._formB.array
      (
        [
          ['Metal Slug', Validators.required],
          ['Medalla de Honor', Validators.required]
        ], Validators.required
      )
  });

  nuevofavorito: FormControl = this._formB.control('', [Validators.required, Validators.minLength(3)])

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }
  constructor(
    private _formB: FormBuilder
  ) {

  }

  campoValido(campo: string) {
    return this.miFormulario.controls[campo].touched && this.miFormulario.controls[campo].errors;
  }

  agregarFavorito() {
    if (this.nuevofavorito.invalid) {
      return;
    }
    this.favoritosArr.push(this._formB.control(this.nuevofavorito.value, Validators.required));
    this.nuevofavorito.reset();

  }

  guardar() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }

  eliminarFavorito(indice: number) {
    this.favoritosArr.removeAt(indice);

  }

}
