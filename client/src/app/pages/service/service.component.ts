import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product/product";
import {DataBaseService} from "../../services/data-base/data-base.service";
import {CartService} from "../../services/cart.service";
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  products: Product[] = [];
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
  constructor(private dataBaseService: DataBaseService, private cartService: CartService) { }

  ngOnInit(): void {
    (async () => {
      const products = await this.dataBaseService.getProduct();
        this.products = products;
    })();
  }
}
