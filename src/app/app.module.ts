import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsPageComponent } from './news-page/news-page.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import { NewPageComponent } from './new-page/new-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NewsPageComponent,
    NewPageComponent,
    ErrorPageComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
        MatCardModule,
        HttpClientModule,
        MatInputModule,
        MatTableModule,
        FormsModule,
        MatIconModule,
        MatButtonModule
    ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
