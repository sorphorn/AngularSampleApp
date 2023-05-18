import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  constructor() { }
  products: Product[] = [
    new Product(1,'MacBook Pro','1749', 'Silver', 'Available',  'https://i.dummyjson.com/data/products/6/thumbnail.png'),
    new Product(2,'Microsoft Surface Laptop 4','1499', 'Black', 'Available', 'https://i.dummyjson.com/data/products/8/thumbnail.jpg'),
    new Product(3,'Infinix INBOOK','1099', 'White', 'Not Available', 'https://i.dummyjson.com/data/products/9/thumbnail.jpg'),
    new Product(4,'HP Pavilion 15-DK1056WM','1099', 'Black', 'Available', 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg'),
    new Product(5,'iPhone X','899', 'White', 'Not Available', 'https://i.dummyjson.com/data/products/2/thumbnail.jpg')
  ]

  onCreateProduct(product: Product){
    this.products.push(product)
  }
}
