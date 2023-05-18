import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // provider and constructor below is dependency injection from AlertMessageService
  // providers: [AlertMessageService]
  providers: [ProductService]
})
export class ProductComponent{
  searchText: string = '';
  electronicProducts: {name: string, status: string}[] = []
  products: Product[] = []

  constructor(private alertMessgeService: AlertMessageService, private productService: ProductService){
  }

 ngOnInit(){
  this.products = this.productService.products;
 }
  

  getAvailableProducts(){
    return this.products.filter(product => product.available === 'Available').length
  }

  getUnAvailableProducts(){
    return this.products.filter(product => product.available   != 'Available').length
  }
  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  info: string = "Here's more detail of our products";

  onShowDetail(){
    // const alertMessgeService = new AlertMessageService();
    this.alertMessgeService.onShowAlertMessage(this.info)
  }

  onNotify(){
    // const alertMessgeService = new AlertMessageService();
    this.alertMessgeService.onShowAlertMessage("This product is comming soon!") 
  }


}
