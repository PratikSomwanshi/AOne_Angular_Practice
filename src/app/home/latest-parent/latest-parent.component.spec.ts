import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestParentComponent } from './latest-parent.component';

describe('LatestParentComponent', () => {
  let component: LatestParentComponent;
  let fixture: ComponentFixture<LatestParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
