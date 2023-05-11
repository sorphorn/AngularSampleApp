import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
  
  products = [
    {id: 1, name: 'MacBook Pro',price: '1749', color: 'Silver', available: 'Available', image: 'https://i.dummyjson.com/data/products/6/thumbnail.png'},
    {id: 2, name: 'Microsoft Surface Laptop 4',price: '1499', color: 'Black', available: 'Available', image: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg'},
    {id: 3, name: 'Infinix INBOOK',price: '1099', color: 'White', available: 'Not Available', image: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg'},
    {id: 4, name: 'HP Pavilion 15-DK1056WM',price: '1099', color: 'Black', available: 'Available', image: 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg'},
    {id: 5, name: 'iPhone X',price: '899', color: 'White', available: 'Not Available', image: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg'}
  ]

  getAvailableProducts(){
    return this.products.filter(product => product.available === 'Available').length
  }

  getUnAvailableProducts(){
    return this.products.filter(product => product.available   != 'Available').length
  }


}
