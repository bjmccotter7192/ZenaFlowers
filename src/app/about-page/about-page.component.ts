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
  }
}