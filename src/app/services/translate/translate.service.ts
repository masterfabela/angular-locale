import { Injectable } from '@angular/core';
import { TranslateService as AngularTranslate } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

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

  changeLanguage(newLanguage: string) {
    this.selectedLanguage = newLanguage;
    this.translateProvider.use(newLanguage);
  }

  getActualLanguage() {
    return this.translateProvider.currentLang;
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/locale/', '.json');
}
