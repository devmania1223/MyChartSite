import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympicComponent } from './olympic.component';

describe('OlympicComponent', () => {
  let component: OlympicComponent;
  let fixture: ComponentFixture<OlympicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlympicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlympicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
