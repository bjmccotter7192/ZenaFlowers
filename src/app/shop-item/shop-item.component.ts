import { Component, OnInit, Input } from '@angular/core';
import { Flower } from '../Flower';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {
  @Input() flower: Flower;
  public flowerUrl: string;
  
  constructor() { }

  ngOnInit() {
    this.flowerUrl = this.flower.Url;
  }

}
