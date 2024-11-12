import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private menProducts = [
    {
      id: 1, 
      category: "COMBO WINS %", 
      name: "Sudadera cremallera print", 
      price: "25,99€",
      description: "Esta sudadera de algodón premium es perfecta para el uso diario. Con un ajuste cómodo y un diseño clásico, es versátil y duradera.",
      stock: 10,
      img1: "../../../assets/images/men-product-1.jpg", 
      img2: "../../../assets/images/men-product-1-2.jpg"
    },
    {
      id: 2, 
      category: "CASUAL", 
      name: "Jeans loose baggy", 
      price: "25,99€",
      description: "Esta sudadera de algodón premium es perfecta para el uso diario. Con un ajuste cómodo y un diseño clásico, es versátil y duradera.",
      stock: 10,
      img1: "../../../assets/images/men-product-2.jpg", 
      img2: "../../../assets/images/men-product-2-2.jpg"
    },
    {
      id: 3, 
      category: "BASIC", 
      name: "Sudadera capucha", 
      price: "25,99€",
      description: "Esta sudadera de algodón premium es perfecta para el uso diario. Con un ajuste cómodo y un diseño clásico, es versátil y duradera.",
      stock: 10,
      img1: "../../../assets/images/men-product-3.jpg", 
      img2: "../../../assets/images/men-product-3-2.jpg"
    },
    {
      id: 4, 
      category: "TRENDY", 
      name: "Pantalón interlock lavado", 
      price: "25,99€",
      description: "Esta sudadera de algodón premium es perfecta para el uso diario. Con un ajuste cómodo y un diseño clásico, es versátil y duradera.",
      stock: 10,
      img1: "../../../assets/images/men-product-4.jpg", 
      img2: "../../../assets/images/men-product-4-2.jpg"
    }
  ];

  getAllMenProducts() {
    return this.menProducts;
  }

  getMenProductById(id: number) {
    return this.menProducts.find(product => product.id === id);
  }
}