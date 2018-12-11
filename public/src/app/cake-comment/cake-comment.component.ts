import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CakeRaterService } from './../cake-rater.service';

@Component({
  selector: 'app-cake-comment',
  templateUrl: './cake-comment.component.html',
  styleUrls: ['./cake-comment.component.css']
})

export class CakeCommentComponent implements OnInit {
@Input() cake: any;
@Output() onSelect = new EventEmitter();
  newComment:any;
  constructor(private _cakeRater: CakeRaterService) { }

  ngOnInit() {
    this.newComment={author:'',comment:'',rating:''};
  }

  makeComment(id){
    this.newComment.rating=Number(this.newComment.rating);
    this._cakeRater.rateACake(id,this.newComment);
    this.newComment={author:'',comment:'',rating:''};
    this.showCake();
  }

  showCake(){
    this.onSelect.emit(this.cake);
  }
}
