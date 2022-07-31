import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortenegroComponent } from './cortenegro.component';

describe('CortenegroComponent', () => {
  let component: CortenegroComponent;
  let fixture: ComponentFixture<CortenegroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CortenegroComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CortenegroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
