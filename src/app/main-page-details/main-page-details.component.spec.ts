import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageDetailsComponent } from './main-page-details.component';

describe('MainPageDetailsComponent', () => {
  let component: MainPageDetailsComponent;
  let fixture: ComponentFixture<MainPageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
