import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-repaso',
  templateUrl: './repaso.component.html',
  styles: [
  ]
})
export class RepasoComponent implements OnInit {

  miFormulario: FormGroup = this._formB.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    edad: [0, [Validators.required, Validators.min(1)]],
    favoritos : this._formB.array
    (
      [
        ['FIFA-2021',Validators.required],
        ['PES-2021',Validators.required],
      ], Validators.required
    )

  });

  get Arrfavoritos(){
    return this.miFormulario.get('favoritos') as FormArray;
  }


  nuevoFavorito : FormControl = this._formB.control('', [Validators.required, Validators.minLength(3)]);

  constructor(private _formB: FormBuilder) { }

  ngOnInit(): void {
  }


  validacionCampo(campo: string) {
    return this.miFormulario.controls[campo].touched && this.miFormulario.controls[campo].errors;
  }

  agregarFavorito(){
    if (this.nuevoFavorito.invalid) {
      return;
    }
    this.Arrfavoritos.push(this._formB.control(this.nuevoFavorito.value, Validators.required));
    console.log("Nuevo favorito agregado");
    this.nuevoFavorito.reset();
  }
  eliminarFavorito(indice:number){
    this.Arrfavoritos.removeAt(indice);
  }
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

  }

}
