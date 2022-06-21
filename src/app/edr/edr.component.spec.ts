import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdrComponent } from './edr.component';

describe('EdrComponent', () => {
  let component: EdrComponent;
  let fixture: ComponentFixture<EdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
