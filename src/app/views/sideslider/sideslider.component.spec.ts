import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidesliderComponent } from './sideslider.component';

describe('SidesliderComponent', () => {
  let component: SidesliderComponent;
  let fixture: ComponentFixture<SidesliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidesliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
