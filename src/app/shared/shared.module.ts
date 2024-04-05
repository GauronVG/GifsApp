import { LazyimageComponent } from './Components/lazyimage/lazyimage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './Components/sidebar/sidebar.component';



@NgModule({
  declarations: [SidebarComponent, LazyimageComponent],
  imports: [
    CommonModule


  ],
  exports:[
    SidebarComponent,LazyimageComponent
  ]
})



export class SharedModule { }
