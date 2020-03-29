import { Component, OnInit } from '@angular/core';
import { Category } from '../Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  category : Category = {
    name : 'Áo thun cổ tròn'
  }
  category1 : Category = {
    name : 'Áo thun thể thao'
  }
  category2 : Category = {
    name : 'Áo thun cổ tim'
  }
  category3 : Category = {
    name : 'Áo thun cổ trụ'
  }
  category4 : Category = {
    name : 'Áo thun cổ chữ V'
  }
  category5 : Category = {
    name : 'Áo thun Hàn Quốc'
  }
  category6 : Category = {
    name : 'Áo thun sơ mi'
  }
  category7 : Category = {
    name : 'Phụ kiện đính kèm'
  }
  category8 : Category = {
    name : 'Bộ quà tặng'
  }
}