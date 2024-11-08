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
    marcas: string[] = ['Marca 1', 'Marca 2', 'Marca 3', 'Marca 4', 'Marca 5'];
    
    constructor() {}

    ngOnInit(): void {}
}
