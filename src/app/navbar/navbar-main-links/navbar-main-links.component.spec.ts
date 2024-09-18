import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMainLinksComponent } from './navbar-main-links.component';

describe('NavbarMainLinksComponent', () => {
  let component: NavbarMainLinksComponent;
  let fixture: ComponentFixture<NavbarMainLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarMainLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarMainLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
