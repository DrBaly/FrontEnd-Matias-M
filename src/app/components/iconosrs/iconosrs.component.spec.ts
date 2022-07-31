import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconosrsComponent } from './iconosrs.component';

describe('IconosrsComponent', () => {
  let component: IconosrsComponent;
  let fixture: ComponentFixture<IconosrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconosrsComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconosrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
