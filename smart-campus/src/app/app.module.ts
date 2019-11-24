import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
