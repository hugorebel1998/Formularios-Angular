import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appCustomMin][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CustomMinDirective,
    multi: true
  }]
})
export class CustomMinDirective implements Validator {

  @Input('minimo') minimo!: number;

  constructor() {
    // console.log("Esto es la directiva", this.minimo)
  }
  validate(control: FormControl) {

    let imputValue = control.value;
    return (imputValue < this.minimo)
      ? { 'customMin': true }
      : null
  }
}
