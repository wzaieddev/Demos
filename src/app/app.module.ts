import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ScrollspyDirective } from './scrollspy.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ScrollspyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    ScrollspyDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
