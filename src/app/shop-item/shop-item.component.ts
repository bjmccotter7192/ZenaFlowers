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
  public flowerPrice: string;
  
  constructor() { }

  ngOnInit() {
    this.flowerUrl = this.flower.Url;
    this.flowerPrice = this.setPriceDisplay();
  }

  setPriceDisplay(){
    if(this.flower.Price <= 0.00){
      return "Price Negotiable";
    }else{
      return "$" + this.flower.Price.toString();
    }
  }

}
