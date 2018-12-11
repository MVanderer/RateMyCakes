import { Component, OnInit } from '@angular/core';
import { CakeRaterService } from './cake-rater.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Cake Rater';
  allCakes = [];
  currentCake:any;
  newCake:any;
  newComment:any;
  constructor(private _cakeRater: CakeRaterService){}

  ngOnInit(){
    this.newCake={baker:'',name:'',url:''};
    this.newComment={author:'',comment:'',rating:''};
    this.getAllCakes();
  }

  getAllCakes():void{
    let observe = this._cakeRater.getAllCakes();
    observe.subscribe(data => {
      this.allCakes=[];
      for (let i in data){
        this.allCakes.push(data[i]);
      }
    });
  }

  showCake(cake):void{
    this.currentCake={}
    this.currentCake=cake;
  }

  createNewCake():void{
    let observe = this._cakeRater.newCake(this.newCake);
    observe.subscribe(data=>{
      this.getAllCakes();
    });
    this.newCake={baker:'',name:'',url:''}
  }
}
