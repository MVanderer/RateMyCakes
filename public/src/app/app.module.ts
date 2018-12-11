import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CakeRaterService } from './cake-rater.service';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CurrentCakeComponent } from './current-cake/current-cake.component'
import { CakeCommentComponent } from './cake-comment/cake-comment.component';
//Room for components to be implemented later

@NgModule({
   declarations: [
      AppComponent,
      CurrentCakeComponent,
      CakeCommentComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      CakeRaterService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
