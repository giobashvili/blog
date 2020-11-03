import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyblogesComponent } from './mybloges.component';

describe('MyblogesComponent', () => {
  let component: MyblogesComponent;
  let fixture: ComponentFixture<MyblogesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyblogesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyblogesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
