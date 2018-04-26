import { Component, OnInit } from '@angular/core';
import {  trigger,  state,  style,  animate,  transition, keyframes } from '@angular/animations';
import { ImageService } from '../services/image.service';
import { Flower } from '../Flower';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
  animations: [
    trigger('shopState', [
      transition('void => active', [
        style({transform: 'translateX(100%) scale(1)'}),
        animate(300)
      ])      
    ])
  ]
})
export class ShopPageComponent implements OnInit {
  public flowers: Flower[];
  public state: string;
  
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getData().subscribe(res => {
      this.flowers = res;
    });
    this.state = 'active';
  }

}
