import { TestBed } from '@angular/core/testing';

import { LearnerStore } from './learner-store';

describe('LearnerStore', () => {
  let service: LearnerStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearnerStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
