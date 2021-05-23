import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipCodeInputComponent } from './zip-code-input.component';

describe('ZipcodeInputComponent', () => {
  let component: ZipCodeInputComponent;
  let fixture: ComponentFixture<ZipCodeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZipCodeInputComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipCodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
