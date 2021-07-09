import { Component, OnInit } from '@angular/core';
import { products } from '../../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {
  product = products;
  share() {
    window.alert('The product has been shared!');
  }



}
