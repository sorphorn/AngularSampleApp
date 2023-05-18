import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  product: Product = new Product(0, "", "", "", "Available", "");
  constructor(private productService: ProductService){
  }

  ngOnInit(){
    
  }
  CreateProduct(){
    this.productService.onCreateProduct(this.product);
  }
}
