import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import {  trigger,  state,  style,  animate,  transition } from '@angular/animations';
import { Flower } from '../Flower';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'main-page-details',
  templateUrl: './main-page-details.component.html',
  styleUrls: ['./main-page-details.component.scss'],
  animations: [
    trigger('mainState', [
      transition('void => active', [
        style({transform: 'translateX(-100%) scale(1)'}),
        animate(300)
      ])
    ])
    // trigger('aboutButtonState', [
    //   state('inactive', style({
    //     transform: 'scale(1)'
    //   })),
    //   state('active',   style({
    //     transform: 'scale(1.1)'
    //   })),
    //   transition('inactive => active', animate('100ms ease-in')),
    //   transition('active => inactive', animate('100ms ease-out'))
    // ]),
    // trigger('shopButtonState', [
    //   state('inactive', style({
    //     transform: 'scale(1)'
    //   })),
    //   state('active',   style({
    //     transform: 'scale(1.1)'
    //   })),
    //   transition('inactive => active', animate('100ms ease-in')),
    //   transition('active => inactive', animate('100ms ease-out'))
    // ]),
    // trigger('contactButtonState', [
    //   state('inactive', style({
    //     transform: 'scale(1)'
    //   })),
    //   state('active',   style({
    //     transform: 'scale(1.1)'
    //   })),
    //   transition('inactive => active', animate('100ms ease-in')),
    //   transition('active => inactive', animate('100ms ease-out'))
    // ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class MainPageDetailsComponent implements OnInit {
  
  public state: string;
  public flowers: Flower[];
  public openingText: string;
  @ViewChild("target") target: ElementRef;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.state = 'active';

    this.imageService.getData().subscribe(res => {
      this.flowers = res;
      this.flowers = this.flowers.filter(x => x.Id == "Z6" || x.Id == "Z11" || x.Id == "Z20");
    });
  }

  scroll(event){
    console.log(event);
    window.scrollTo(0, 1000);
  }
}
