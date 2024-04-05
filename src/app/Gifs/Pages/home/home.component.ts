import { Component } from '@angular/core';
import { gifsService } from '../../Components/Services/gifs.services';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home',
  templateUrl: './home.component.html'
})
export class HomePageComponent {

  constructor(private gifservice:gifsService){
      }

  get gifs():Gif[] {
    return this.gifservice.giflist;
  }

}
