import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MenComponent } from './pages/men/men.component';
import { WomenComponent } from './pages/women/women.component';
import { ProductComponent } from './pages/product/product.component';
import { APIproductsComponent } from './pages/apiproducts/apiproducts.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'categories', component: CategoriesComponent},
    { path: 'men', component: MenComponent},
    { path: 'women', component: WomenComponent},
    { path: 'producto', component: ProductComponent},
    { path: 'producto/:id', component: ProductComponent},
    { path: 'producto/:id/:productos', component: ProductComponent},
    {path: 'category/:categoryName', component: APIproductsComponent},
    {path: 'producto/:categoryName/:id', component: ProductComponent}
];
