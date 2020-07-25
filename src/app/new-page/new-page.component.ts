import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {HttpService, IArticles} from '../http.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {
  articles: IArticles[] = [];
  articleTitle: Params;
  newArticle: IArticles[] = [];
  private myLet: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private router: Router,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'arrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/arrow.svg'));
    // console.log(this.http.myLet);
    // this.myLet = this.http.myLet;
    // console.log(this.myLet);

  }

  ngOnInit() {
    // this.http.getNews()
    //   .subscribe(response =>  {
    //     this.articles = response.articles;
    //     this.route.params.subscribe((params: Params) => {
    //       this.articleTitle = params;
    //     });
    //     const paramsToTitle = JSON.stringify(this.articleTitle).slice(19, -2);
    //     console.log(paramsToTitle)
    //     function includeTitle(element) {
    //       return element.author === paramsToTitle;
    //     }
    //     const arrArticles = this.articles;
    //     const newArticle: IArticles[] = arrArticles.filter(includeTitle);
    //     this.newArticle = newArticle;
    //     console.log(this.newArticle);
    //   });
  }

}
