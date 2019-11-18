import { Component } from '@angular/core';
import { TranslateService as AngularTranslate } from '@ngx-translate/core';
import { TranslateService } from './services/translate/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularLocaleTest';
  translateService: TranslateService;
  browserLanguage;
  constructor(public translate: AngularTranslate) {
    this.translateService = new TranslateService(translate);
    this.translateService.configureLanguages();
    this.browserLanguage = this.translateService.getBrowserLanguage();
  }
}
