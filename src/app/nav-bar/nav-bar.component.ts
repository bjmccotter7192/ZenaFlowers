import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {
  public phoneNumber: string;
  public emailAddress: string;

  constructor() { }

  ngOnInit() {
    this.phoneNumber = " (573) 808-6568";
    this.emailAddress = " ledouxzena@gmail.com"
  }

}
