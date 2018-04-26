import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Flower } from '../Flower';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { ContactInfo } from '../contact-page/models/contactInfo';

@Injectable()
export class ImageService {
  public flowers: Observable<Flower[]>;
  private dataStore: {
    flowers: Flower[]
  };

  private url: string = '/api/flowers';

  constructor(public http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get(this.url);
  }

  public sendEmail(contactInfo: any) {
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this.http.post('/api/send', contactInfo, {
      headers: headers
    })
    .subscribe(data => {
      console.log(data);
    });
  }

  loadAll() {
    this.getData().subscribe(data => {
      this.dataStore.flowers = data;
    }, error => console.log('Could not load flowers.'));
  }
}
