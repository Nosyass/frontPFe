import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpchercherComponent } from './empchercher.component';

describe('EmpchercherComponent', () => {
  let component: EmpchercherComponent;
  let fixture: ComponentFixture<EmpchercherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpchercherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpchercherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
