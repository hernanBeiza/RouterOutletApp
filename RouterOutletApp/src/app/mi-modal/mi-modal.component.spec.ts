import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiModalComponent } from './mi-modal.component';

describe('MiModalComponent', () => {
  let component: MiModalComponent;
  let fixture: ComponentFixture<MiModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
