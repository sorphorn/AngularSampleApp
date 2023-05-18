export class Product {
    id: number;
    name: string;
    price: string;
    color: string;
    available: string;
    image: string;
   
    constructor(id: number, name: string, price: string, color: string, available: string, image: string) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.color = color;
      this.available = available;
      this.image = image;
    }
  }
  