import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencydashbaordComponent } from './currencydashbaord.component';

describe('CurrencydashbaordComponent', () => {
  let component: CurrencydashbaordComponent;
  let fixture: ComponentFixture<CurrencydashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencydashbaordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencydashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
