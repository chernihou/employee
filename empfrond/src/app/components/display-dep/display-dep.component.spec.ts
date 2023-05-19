import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDepComponent } from './display-dep.component';

describe('DisplayDepComponent', () => {
  let component: DisplayDepComponent;
  let fixture: ComponentFixture<DisplayDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
