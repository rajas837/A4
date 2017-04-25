import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero.form.component';
import { Logger } from './services/logger.service';

@NgModule({
  declarations: [
    AppComponent, HeroFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
