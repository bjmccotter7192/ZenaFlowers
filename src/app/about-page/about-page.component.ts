import { Component, OnInit } from '@angular/core';
import {  trigger,  state,  style,  animate,  transition } from '@angular/animations';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  animations: [
    trigger('aboutState', [
      transition('void => active', [
        style({transform: 'translateX(100%) scale(1)'}),
        animate(300)
      ])
    ])
  ]
})
export class AboutPageComponent implements OnInit {
  public state: string;

  public aboutText: string;

  constructor() { }

  ngOnInit() {
    this.state = 'active';

    this.aboutText = "My name is Zena Ledoux and I first started making floral arrangements for my family and friends back home in Guyana, South America."
    + " I have formed my craft to meet all needs, and am excited to spread the joy here in Columbia, Missouri."
    + "If you have any questions about any of my products or if you would like to request a unique arrange please see my contact page"
    + "Thank you everybody and enjoy Zena Flowers!";
  }
}