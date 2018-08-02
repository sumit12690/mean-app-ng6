import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  category: any = {};
  categoryForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private categoryservice: CategoryService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.categoryForm = this.fb.group({
      category_name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryservice.getCategory(params['id']).subscribe(res => {
        this.category = res;
      });
    });
  }

  updateCategory(category_name) {
    this.route.params.subscribe(params => {
      this.categoryservice.updateCategory(category_name, params['id']);
      this.router.navigate(['category/list']);
    });
  }

}
