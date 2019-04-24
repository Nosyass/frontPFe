import { TestBed } from '@angular/core/testing';

import { AgentdecService } from './agentdec.service';

describe('AgentdecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgentdecService = TestBed.get(AgentdecService);
    expect(service).toBeTruthy();
  });
});
