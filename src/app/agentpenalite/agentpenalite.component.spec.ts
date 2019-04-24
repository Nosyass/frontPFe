import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentpenaliteComponent } from './agentpenalite.component';

describe('AgentpenaliteComponent', () => {
  let component: AgentpenaliteComponent;
  let fixture: ComponentFixture<AgentpenaliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentpenaliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentpenaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
