import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisesComponent } from './advertises.component';

describe('AdvertisesComponent', () => {
  let component: AdvertisesComponent;
  let fixture: ComponentFixture<AdvertisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisesComponent]
    });
    fixture = TestBed.createComponent(AdvertisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
