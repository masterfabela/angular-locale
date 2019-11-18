import { Component, OnInit } from '@angular/core';
import { TranslateService as AngularTranslate } from '@ngx-translate/core';
import { TranslateService } from '../../services/translate/translate.service';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.scss'],
})
export class ConstructionComponent implements OnInit {
  translateService: TranslateService;
  browserLanguage;

  constructor(public translate: AngularTranslate) {
    this.translateService = new TranslateService(translate);
    this.translateService.configureLanguages();
    this.browserLanguage = this.translateService.getBrowserLanguage();
  }

  ngOnInit() {}

  changeLanguage() {
    if (this.translateService.getActualLanguage() === 'es') {
      this.translateService.changeLanguage('en');
    } else {
      this.translateService.changeLanguage('es');
    }
  }
}
