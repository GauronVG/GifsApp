import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { gifsService } from '../Services/gifs.services';

@Component({
  selector: 'gifs-search-box',
  template:`
  <h5>Buscar</h5>
  <input
  type="text"
  class="form-control"
  placeholder="Buscar Gifs..."
  (keyup.enter)="search()"
  #inputtag
  >
  `
})

export class SearchBoxComponent  {

  @ViewChild('inputtag')
  public inputval!: ElementRef<HTMLInputElement>

  constructor(private gifsService:gifsService){}

  search(){
    const tag = this.inputval.nativeElement.value

    this.gifsService.searchtag(tag);
    this.inputval.nativeElement.value = '';


console.log(tag)
  }

}
