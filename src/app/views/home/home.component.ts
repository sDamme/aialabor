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

  follow = true;
  enablePan = true;

  index = '0';
  speed = 5000;
  infinite = true;
  direction = 'right';
  directionToggle = false;
  autoplay = true;
  avatars = [
    {title: "Pakume abi õige toote ja lahenduse valimisel", url: "../../../assets/slider_0.jpg"},
    {title: "Lisaks pakume kaevurakkeid, kaevukaani, kõnnitee plaate", url: "../../../assets/aialabor_4.jpg"},
    {title: "Transpordivõimalus üle Eesti, alates 20€/alus", url: "../../../assets/aialabor_5.jpg"}
  ];
  
  constructor(productsService: ProductsService) {
    this.products = productsService.getProducts();
  }
  indexChanged(index) {

  }
  ngAfterViewInit() {
  }
  trackByFn(index, item) {
    return index; // or item.id
  }
}
