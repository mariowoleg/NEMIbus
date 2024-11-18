import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusPopupComponent } from './bus-popup.component';

describe('BusPopupComponent', () => {
  let component: BusPopupComponent;
  let fixture: ComponentFixture<BusPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
