import {Component, OnInit} from '@angular/core';

import {HttpService, IArticles} from '../http.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {
  articleId: IArticles;

  constructor(
    private http: HttpService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'arrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/arrow.svg'));
  }
  ngOnInit() {
    this.articleId = this.http.articleId;
  }

}
