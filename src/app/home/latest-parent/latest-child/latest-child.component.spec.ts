import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestChildComponent } from './latest-child.component';

describe('LatestChildComponent', () => {
  let component: LatestChildComponent;
  let fixture: ComponentFixture<LatestChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
