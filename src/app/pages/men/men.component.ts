import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [SliderComponent, ProductsComponent],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent {
  title: string = "Este es el titulo de men"
  desc: string = "Esta es la desc de men"



  productos: Array<any> = [
    {id: 1, category: "COMBO WINS %", name: "Sudadera cremallera print", price: "25,99€", img1: "../../../assets/images/men-product-1.jpg", img2: "../../../assets/images/men-product-1-2.jpg"},
    {id: 2, category: "CASUAL", name: "Jeans loose baggy", price: "25,99€", img1: "../../../assets/images/men-product-2.jpg", img2: "../../../assets/images/men-product-2-2.jpg"},
    {id: 3, category: "BASIC", name: "Sudadera capucha", price: "25,99€", img1: "../../../assets/images/men-product-3.jpg", img2: "../../../assets/images/men-product-3-2.jpg"},
    {id: 4, category: "TRENDY", name: "Pantalón interlock lavado", price: "25,99€", img1: "../../../assets/images/men-product-4.jpg", img2: "../../../assets/images/men-product-4-2.jpg"}
  ]
  
}


