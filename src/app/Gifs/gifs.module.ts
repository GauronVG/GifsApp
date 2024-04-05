import { SharedModule } from './../shared/shared.module';
import { CardListComponent } from './Components/card-list/card-list.component';
import { HomePageComponent } from './Pages/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './Components/search-box/search-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent,
    SharedModule
  ]
})
export class GifsModule { }
