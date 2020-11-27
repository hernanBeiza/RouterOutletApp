import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeroComponent } from './cero.component';

describe('CeroComponent', () => {
  let component: CeroComponent;
  let fixture: ComponentFixture<CeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
