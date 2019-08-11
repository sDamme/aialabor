import { Component, OnInit, AfterViewInit } from '@angular/core';

  import { ProductsService } from 'src/app/products.service';
import { Products } from 'src/app/products';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  products: any;
  togglePanel: any = {};
  showProductInfo = true;
  list = [
    
  ];
  constructor(productsService: ProductsService) {
    this.products = productsService.getProducts();
  }

  ngAfterViewInit() {
  }
  trackByFn(index, item) {
    return index; // or item.id
  }
}
