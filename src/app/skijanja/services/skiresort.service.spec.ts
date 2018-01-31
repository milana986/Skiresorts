import { TestBed, inject } from '@angular/core/testing';

import { SkiresortService } from './skiresort.service';

describe('SkiresortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkiresortService]
    });
  });

  it('should be created', inject([SkiresortService], (service: SkiresortService) => {
    expect(service).toBeTruthy();
  }));
});
