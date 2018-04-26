import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Observable } from 'rxjs/Observable';
import { Flower } from '../Flower';

@Component({
  selector: 'main-slide-show',
  templateUrl: './main-slide-show.component.html',
  styleUrls: ['./main-slide-show.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MainSlideShowComponent implements OnInit {
    public flowers: Flower[];
    public flowerUrls: string[];
    public hovered: boolean = false;

    constructor(private imageService: ImageService){}

    ngOnInit() {
      // this.imageService.getData().subscribe(res => {
      //   this.flowers = res;
      //   this.flowerUrls = this.getFlowerUrls();
      // });

      this.flowerUrls = [
        "../../assets/images/homepic1.png",
        "../../assets/images/homepic2.png",
        "../../assets/images/homepic3.png"
      ];
    }

    // toggle(){
    //   this.hovered = !this.hovered;
    // }

    getFlowerUrls(): string[]{
      let flowerUrls: string[] = [];
      this.flowers.forEach(f => {
        flowerUrls.push("url(" + f.Url + ")");
      });
      return flowerUrls;
    }
  }