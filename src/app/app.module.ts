import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    TranslateModule,
  ],
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
})
export class AppModule { }
