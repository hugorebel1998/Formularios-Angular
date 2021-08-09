import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { RepasoComponent } from './repaso/repaso.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      { path: 'basicos', component: BasicosComponent},
      { path: 'dinamicos', component: DinamicosComponent},
      { path: 'switches', component: SwitchesComponent},
      { path: 'repaso', component: RepasoComponent },
      { path: '**', redirectTo:'basicos'}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
