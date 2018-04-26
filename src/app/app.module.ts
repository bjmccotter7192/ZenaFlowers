import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPageDetailsComponent } from './main-page-details/main-page-details.component';
import { MainSlideShowComponent } from './main-slide-show/main-slide-show.component';
import { ImageService } from './services/image.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AboutPageComponent } from './about-page/about-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { FooterComponent } from './footer/footer.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'home', component: MainPageDetailsComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'shop', component: ShopPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavBarComponent,
    MainPageDetailsComponent,
    MainSlideShowComponent,
    AboutPageComponent,
    ShopPageComponent,
    ShopItemComponent,
    FooterComponent,
    ContactPageComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    RouterModule.forRoot( appRoutes )
  ],
  providers: [ImageService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
