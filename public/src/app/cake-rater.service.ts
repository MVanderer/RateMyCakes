import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CakeRaterService {

  constructor(private _http:HttpClient) { }

  getAllCakes(){
    console.log("CAKES!!!!")
    return this._http.get('/cakes');
  }

  getCakeDetails(id){
    console.log('foo');
    
    return this._http.get('/cakes/'+id+'/');
  }

  newCake(cake){
    return this._http.post('/cakes',cake);
  }

  rateACake(id,comment){
    let cakeGrab = this._http.post('/comment/'+id+'/',comment);
    cakeGrab.subscribe(data => {
      console.log("OUTPUT: ")
      console.log(data);
    });
  }

  getCakeRatings(id){
    return this._http.get('/comment/'+id+'/');
  }

}
