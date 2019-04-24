import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentdecComponent } from './agentdec.component';

describe('AgentdecComponent', () => {
  let component: AgentdecComponent;
  let fixture: ComponentFixture<AgentdecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentdecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentdecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
