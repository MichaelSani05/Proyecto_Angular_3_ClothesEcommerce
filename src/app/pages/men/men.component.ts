import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent {
  title: string = "Este es el titulo de men"
  desc: string = "Esta es la desc de men"
}
