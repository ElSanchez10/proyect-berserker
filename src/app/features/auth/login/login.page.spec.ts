import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle password visibility', () => {
    expect(component.isPasswordVisible).toBe(false);

    component.togglePasswordVisibility();
    expect(component.isPasswordVisible).toBe(true);

    component.togglePasswordVisibility();
    expect(component.isPasswordVisible).toBe(false);
  });
});
