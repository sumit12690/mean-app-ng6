import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  category: any = {};

  constructor(private route: ActivatedRoute,
    private categoryservice: CategoryService, ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryservice.getCategory(params['id']).subscribe(res => {
        this.category = res;
      });
    });
  }

}
