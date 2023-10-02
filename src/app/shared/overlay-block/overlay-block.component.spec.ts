import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayBlockComponent } from './overlay-block.component';

describe('OverlayBlockComponent', () => {
  let component: OverlayBlockComponent;
  let fixture: ComponentFixture<OverlayBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlayBlockComponent]
    });
    fixture = TestBed.createComponent(OverlayBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
