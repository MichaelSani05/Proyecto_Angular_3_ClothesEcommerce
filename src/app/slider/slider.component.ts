import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-slider',
    standalone: true,
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
    imports: [NgFor]
})
export class SliderComponent implements OnInit {
    marcas: string[] = ['../../assets/images/hermes-LOGO-2.png', '../../assets/images/zara-LOGO-2.png', '../../assets/images/puma-LOGO-2.png', '../../assets/images/nike-LOGO-2.png', '../../assets/images/adidas-LOGO-2.png'];
    
    constructor() {}

    ngOnInit(): void {}
}
