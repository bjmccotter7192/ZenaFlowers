import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSlideShowComponent } from './main-slide-show.component';

describe('MainSlideShowComponent', () => {
  let component: MainSlideShowComponent;
  let fixture: ComponentFixture<MainSlideShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSlideShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSlideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
