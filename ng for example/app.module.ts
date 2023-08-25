import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';
import { ExampleComponent } from './example/example.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    NgFor
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
