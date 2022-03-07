import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaldialogComponent } from './localdialog.component';

describe('LocaldialogComponent', () => {
  let component: LocaldialogComponent;
  let fixture: ComponentFixture<LocaldialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaldialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
