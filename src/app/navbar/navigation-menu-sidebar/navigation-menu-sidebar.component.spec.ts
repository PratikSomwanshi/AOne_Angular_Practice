import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuSidebarComponent } from './navigation-menu-sidebar.component';

describe('NavigationMenuSidebarComponent', () => {
  let component: NavigationMenuSidebarComponent;
  let fixture: ComponentFixture<NavigationMenuSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationMenuSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationMenuSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
