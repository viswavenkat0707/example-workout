import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
   title='list of movies';
movies=[
   {title: 'harrypotter',cast:'daniel richilif',relesedate:2002},
    {title:'john wick', cast:'kneave reaves',relesedate:2013},
    {title:'roja',cast:'aravintsamy',relesedate:1992},
    {title:'jailer',cast:'rajini',relesedate:2023}
]


}
