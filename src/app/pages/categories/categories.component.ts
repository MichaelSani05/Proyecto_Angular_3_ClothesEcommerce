import { Component } from '@angular/core';
import { CategoryListComponent } from '../../components/category-list/category-list.component';
import { RouterLink } from '@angular/router';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [SliderComponent, CategoryListComponent, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  title: String = "Categorias";
  desc: String = "Esta es la descripción de categorias";



}
