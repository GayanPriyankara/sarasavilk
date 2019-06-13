import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GayanComponent } from './gayan.component';

describe('GayanComponent', () => {
  let component: GayanComponent;
  let fixture: ComponentFixture<GayanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GayanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GayanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
