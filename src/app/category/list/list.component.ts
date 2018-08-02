import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Category } from './category';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  categories: Category[];

  constructor(private categoryservice: CategoryService) { }


  ngOnInit() {
    this.categoryservice
      .getCategories()
      .subscribe((data: Category[]) => {
        this.categories = data;
      });
  }

  deleteCategory(id) {
    this.categoryservice.deleteCategory(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}
