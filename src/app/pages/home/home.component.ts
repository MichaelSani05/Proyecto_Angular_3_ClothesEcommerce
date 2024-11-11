import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title: String = "Calidad y Estilo en Cada Prenda";
  desc: String = "Nos apasiona la moda. Descubre nuestra selección cuidadosamente diseñada para ofrecerte estilo, comodidad y durabilidad en cada look.";
}
