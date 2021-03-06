import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface IResponse {
  'articles': IArticles[];
  'status': string;
  'totalResults': number;
}

export interface IArticles {
  'index': number;
  'author': string;
  'content': string;
  'description': string;
  'publishedAt': string;
  'source': object;
  'title': string;
  'url': string;
  'urlToImage': string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  articleId: IArticles;

  constructor(
    private http: HttpClient
  ) {
  }

  getNews() {
    return this.http.get<IResponse>('https://newsapi.org/v2/top-headlines?country=us&category' +
      '=business&apiKey=1647a09649fd4d209bc2e5f0f183ab84');
  }
}
