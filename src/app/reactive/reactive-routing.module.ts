import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from '../reactive/basicos/basicos.component';
import { DinamicosComponent } from '../reactive/dinamicos/dinamicos.component';
import { SwitchesComponent } from '../reactive/switches/switches.component';
import { RepasoComponent } from '../reactive/repaso/repaso.component';

const routes: Routes = [

{
  path: '',
  children: [
    { path: 'basicos', component: BasicosComponent},
    { path: 'dinamicos', component:DinamicosComponent},
    { path: 'switches', component:SwitchesComponent},
    { path: 'repaso', component: RepasoComponent},
    { path: '**', redirectTo: 'basicos' } 
  ]
}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
