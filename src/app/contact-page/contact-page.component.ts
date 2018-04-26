import { Component, OnInit } from '@angular/core';
import { ContactInfo } from './models/contactInfo';
import { ImageService } from '../services/image.service';
import {  trigger,  state,  style,  animate,  transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  animations: [
    trigger('contactState', [
      transition('void => active', [
        style({transform: 'translateX(100%) scale(1)'}),
        animate(300)
      ])      
    ])
  ]
})

export class ContactPageComponent implements OnInit{
  public subjects: string[];
  public contactInfo: ContactInfo;
  public sent: boolean = false;
  public state: string;

  
  constructor(private imageServcie: ImageService) {   
  }

  ngOnInit(){
    this.state = 'active';
    this.contactInfo = new ContactInfo();
    this.subjects = [ 'Buy Flowers' , 'Order Custom' , 'Returns' , 'Other' ];
    this.contactInfo.subject = null;
  }

  async sendContactInfo(){
    this.sent = true;
    await this.imageServcie.sendEmail(this.contactInfo);
  }

  isValid(){
    if(this.contactInfo
      && this.contactInfo.name 
      && this.contactInfo.subject 
      && this.contactInfo.email 
      && this.contactInfo.message){
      return true;
    }
    else{
      return false;
    }
  }
}