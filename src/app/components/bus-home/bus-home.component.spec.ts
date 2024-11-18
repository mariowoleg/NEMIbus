import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusHomeComponent } from './bus-home.component';

describe('BusHomeComponent', () => {
  let component: BusHomeComponent;
  let fixture: ComponentFixture<BusHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
