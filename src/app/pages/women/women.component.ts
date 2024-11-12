import { Component } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {
  title: string = "Este es el titulo de mujer"
  desc: string = "Este es la desc de mujer"
}
