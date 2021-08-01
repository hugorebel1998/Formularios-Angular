import { Component } from '@angular/core';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent{


  templateitem: Item[] = 
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


  reactiveItem: Item [] =
  [
    {
      text: 'Basicos',
      url: './reactive/basicos'
    },
    {
      text: 'Dinamicos',
      url: './reactive/dinamicos'
    },
    {
      text: 'Switches',
      url: './reactive/switches'
    }
  ]
}
