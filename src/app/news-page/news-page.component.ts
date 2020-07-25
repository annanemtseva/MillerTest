import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import {HttpService, IArticles} from '../http.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  private newArticle: IArticles[];


  constructor(
    private http: HttpService
  ) {
    // console.log(this.http.myLet)
    // this.http.myLet = 'hello';
    // console.log(this.http.myLet);
  }
  articles: IArticles[] = [];
  displayedColumns = ['title', 'img'];
  dataSource: MatTableDataSource<IArticles>;
  filterValue = '';
  dataSourceArr: IArticles[];

  @ViewChild('MatPaginator', {static: false}) paginator: MatPaginator;
  private articleId: any;

  ngOnInit() {
    this.http.getNews().subscribe(res => {
        this.dataSource = new MatTableDataSource(res.articles.map((data, index) => {
          data.index = index;
          return data;
        }));
        // console.log(this.dataSource);
      }
    );
  }

  public filterNews = (value: string) => {
    this.dataSource.filter = value;
  }

  getIdTarget(event) {
    const arrArticles = this.dataSource.data[event.target.id];
    console.log(arrArticles);
  }


}
