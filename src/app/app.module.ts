import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { QuestionComponent } from './question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';


const MATERIAL_MODULE = [MatFormFieldModule,
                         MatInputModule,
                         MatSelectModule,
                         MatIconModule,
                         MatCardModule

                          ];

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatCardModule
    // BrowserModule,
    // AppRoutingModule,
    // BrowserAnimationsModule,
    // FormsModule,
    // ReactiveFormsModule,
    // CommonModule,
    // [...MATERIAL_MODULE]
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent]
})
export class AppModule { }
