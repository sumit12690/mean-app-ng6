import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { routing } from './category.routing';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { CategoryService } from './category.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ReactiveFormsModule
  ],
  declarations: [
    CreateComponent,
    EditComponent,
    DetailComponent,
    ListComponent
  ],
  // exports: [
  //   CreateComponent,
  //   EditComponent,
  //   DetailComponent,
  //   ListComponent
  // ],
  providers: [
    CategoryService
  ],
})
export class CategoryModule { }
