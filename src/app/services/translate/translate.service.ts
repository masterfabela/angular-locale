import { Injectable } from '@angular/core';
import { TranslateService as AngularTranslate } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  constructor(translateProvider: AngularTranslate) {
    this.translateProvider = translateProvider;
  }
  static DEFAULT_LANGUAGE = 'es';
  static SUPPORTED_LANGUAGES = [TranslateService.DEFAULT_LANGUAGE, 'en'];
  selectedLanguage = TranslateService.DEFAULT_LANGUAGE;
  translateProvider: AngularTranslate;

  getBrowserLanguage() {
    return this.translateProvider.getBrowserLang();
  }

  configureLanguages() {
    this.translateProvider.addLangs(TranslateService.SUPPORTED_LANGUAGES);
    this.translateProvider.setDefaultLang(TranslateService.DEFAULT_LANGUAGE);
  }

  getTranslation(translationKey: string | string[], interpolatedParams?: object) {
    return this.translateProvider.get(translationKey, interpolatedParams);
  }
}
