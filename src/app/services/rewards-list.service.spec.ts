import { TestBed } from '@angular/core/testing';

import { RewardsListService } from './rewards-list.service';

describe('RewardsListService', () => {
  let service: RewardsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RewardsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
