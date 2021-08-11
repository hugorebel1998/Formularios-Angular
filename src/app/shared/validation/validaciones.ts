import { FormControl } from "@angular/forms";

export const nombreApellido: string = "([a-zA-ZÑñÁáÉéÍíÓóÚú]+) ([a-zA-ZÑñÁáÉéÍíÓóÚú]+)";
export const emailV: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


export const noPuedeserAmin = (campo: FormControl) => {
    const valor: string = campo.value?.trim().toLowerCase();
    if (valor == 'admin') {

        return {
            noAdmin: true
        }
    }
    return null;
}



// nombreApellido: string = "([a-zA-ZÑñÁáÉéÍíÓóÚú]+) ([a-zA-ZÑñÁáÉéÍíÓóÚú]+)";
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