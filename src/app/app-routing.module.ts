import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsPageComponent} from './news-page/news-page.component';
import {NewPageComponent} from './new-page/new-page.component';
import {AppComponent} from './app.component';
import {ErrorPageComponent} from './error-page/error-page.component';


const routes: Routes = [
  {
    path: '', component: NewsPageComponent},
  // {path: 'news', component: NewsPageComponent},
  {path: ':article.index', component: NewPageComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
