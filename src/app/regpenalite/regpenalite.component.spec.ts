import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegpenaliteComponent } from './regpenalite.component';

describe('RegpenaliteComponent', () => {
  let component: RegpenaliteComponent;
  let fixture: ComponentFixture<RegpenaliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegpenaliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegpenaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
