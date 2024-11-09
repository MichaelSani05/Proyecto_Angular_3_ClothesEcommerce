import { Component, Input } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() title: String = "";
  @Input() desc: String = "";
}
