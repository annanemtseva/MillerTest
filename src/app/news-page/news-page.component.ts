import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

import {HttpService, IArticles} from '../http.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  constructor(
    private http: HttpService
  ) { }

  articles: IArticles[] = [];
  displayedColumns = ['title', 'img'];
  dataSource: MatTableDataSource<IArticles> = new MatTableDataSource();
  filterValue = '';
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.http.getNews().subscribe(res => {
      this.dataSource.data = res.articles.map((data, index) => {
          data.index = index;
          return data;
        });
      }
    );
  }

  public filterNews = (value: string) => {
    this.dataSource.filter = value;
  }

  getIdTarget(event) {
    this.http.articleId = this.dataSource.data[event.target.id];
  }

}
