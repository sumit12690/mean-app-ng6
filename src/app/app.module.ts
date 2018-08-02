import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateComponent } from './category/create/create.component';
import { EditComponent } from './category/edit/edit.component';
import { DetailComponent } from './category/detail/detail.component';
import { ListComponent } from './category/list/list.component';
import { CategoryService } from './category.service';


const routes: Routes = [
  { 
    path: 'category', 
    redirectTo: 'category/list', 
    pathMatch: 'full' 
  },
  { 
    path: '', 
    redirectTo: 'category/list', 
    pathMatch: 'full' 
  },
  {
    path: 'category/create',
    component: CreateComponent
  },
  {
    path: 'category/list',
    component: ListComponent
  },
  {
    path: 'category/edit/:id',
    component: EditComponent
  },
  {
    path: 'category/detail/:id',
    component: DetailComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    DetailComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoryService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
