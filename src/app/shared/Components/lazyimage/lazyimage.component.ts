import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyimage',
  templateUrl: './lazyimage.component.html',
})
export class LazyimageComponent implements OnInit {

  @Input()
  public url!:string ;

  @Input()
  public alt:string = '' ;

  public onload :boolean = false;





  ngOnInit(): void {
    if(!this.url)throw new Error('url es requerido');
  }


  onloaded(){
    this.onload = true;
  }



}
