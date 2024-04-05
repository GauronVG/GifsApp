import { Component } from '@angular/core';
import { gifsService } from '../../../Gifs/Components/Services/gifs.services';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsservice:gifsService){};

  get tags(){
    return this.gifsservice.tagsHistory
  }

}
