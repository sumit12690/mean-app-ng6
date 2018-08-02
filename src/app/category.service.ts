import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  uri = 'http://localhost:4000/category';

  constructor(private http: HttpClient) { }

  addCategory(category_name) {
    const cat_data = {
      category_name: category_name,
    }
    this.http.post(`${this.uri}/add`, cat_data)
      .subscribe(res => console.log('Done'));
  }

  getCategories() {
    return this
      .http
      .get(`${this.uri}`);
  }


  getCategory(id) {
    return this
      .http
      .get(`${this.uri}/${id}`);
  }


  updateCategory(category_name, id) {
    const obj = {
      category_name: category_name,
    };
    this
      .http
      .put(`${this.uri}/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteCategory(id) {
    return this
      .http
      .delete(`${this.uri}/${id}`);
  }
}
