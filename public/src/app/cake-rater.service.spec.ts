import { TestBed } from '@angular/core/testing';

import { CakeRaterService } from './cake-rater.service';

describe('CakeRaterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CakeRaterService = TestBed.get(CakeRaterService);
    expect(service).toBeTruthy();
  });
});
