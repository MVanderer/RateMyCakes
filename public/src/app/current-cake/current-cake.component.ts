import { Component, Input, OnChanges } from '@angular/core';
import { CakeRaterService } from './../cake-rater.service';

@Component({
  selector: 'app-current-cake',
  templateUrl: './current-cake.component.html',
  styleUrls: ['./current-cake.component.css']
})
export class CurrentCakeComponent implements OnChanges {
@Input() cakeToShow: any;
  currCakeRatings=[];
  averageRating:number;
  constructor(private _cakeRater: CakeRaterService) { }

  ngOnChanges(){
    let observe = this._cakeRater.getCakeRatings(this.cakeToShow._id);
    observe.subscribe(data =>{
      console.log("*********COMMENTS********");
      this.currCakeRatings=data['ratings'];
      this.averageRating=data['avg'];
    });
  }

}
