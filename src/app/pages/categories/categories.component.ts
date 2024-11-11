import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { CategoryListComponent } from '../../components/category-list/category-list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [BannerComponent, CategoryListComponent, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  title: String = "Este es el titulo de categorias";
  desc: String = "Esta es la descripción de categorias";



}
