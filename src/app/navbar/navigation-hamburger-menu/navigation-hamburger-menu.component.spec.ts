import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationHamburgerMenuComponent } from './navigation-hamburger-menu.component';

describe('NavigationHamburgerMenuComponent', () => {
  let component: NavigationHamburgerMenuComponent;
  let fixture: ComponentFixture<NavigationHamburgerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationHamburgerMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationHamburgerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
