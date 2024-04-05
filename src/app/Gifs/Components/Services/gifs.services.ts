import { HttpClient, HttpParams, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, Welcome } from '../../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class gifsService {

  private _tagsHistory:string[] = [];
  // insertar apikey
  private apikey:string = 'mjhxoVOLu4Cc31kjdsALyyhKeGnUClt8';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs';

  public giflist:Gif[] = [];

  constructor(private client:HttpClient){}

  get tagsHistory(){
    return [...this._tagsHistory];
  }


  private organizar(tag:string){
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)){
      this._tagsHistory= this._tagsHistory.filter( (oldtag) => oldtag != tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory =  this._tagsHistory.splice(0,10);
  }
  searchtag(tag:string):void{
    if (tag.length==0) return;
    this.organizar(tag);

    const params= new HttpParams()
    .set('api_key' , this.apikey)
    .set('limit' , 10)
    .set('q' , tag);

    this.client.get<Welcome>(`${this.serviceUrl}/search?`,{params})
    .subscribe(resp=>{
      this.giflist= resp.data
      console.log(resp);
    });

  }

}
