import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';


import { CategoryModule } from './category/category.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CategoryModule,
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
