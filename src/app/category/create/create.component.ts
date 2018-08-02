import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../category.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})


export class CreateComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(private categoryservice: CategoryService, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }


  createForm() {
    this.categoryForm = this.fb.group({
      category_name: ['', Validators.required],

    })
  }

  addCategory(category_name) {
    this.categoryservice.addCategory(category_name);
  }

  ngOnInit() {
  }

}
