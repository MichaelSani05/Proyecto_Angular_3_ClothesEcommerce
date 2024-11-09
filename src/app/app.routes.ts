import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'categories', component: CategoriesComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'category', component: ProductsComponent},
    { path: 'category/:categoryName', component: ProductsComponent}
];
