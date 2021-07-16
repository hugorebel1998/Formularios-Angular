import { Component } from '@angular/core';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent{


  item: Item[] = 
  [
    {
      text: 'Basicos',
      url: './template/basicos'
    },
    {
      text: 'Dinamicos',
      url: './template/dinamicos'
    },
    {
      text: 'Switches',
      url: './template/switches'
    }

  ];
}
