import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderMaintanceComponent } from './under-maintance.component';

describe('UnderMaintanceComponent', () => {
  let component: UnderMaintanceComponent;
  let fixture: ComponentFixture<UnderMaintanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderMaintanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderMaintanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
