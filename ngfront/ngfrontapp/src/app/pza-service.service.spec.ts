import { TestBed } from '@angular/core/testing';

import { PzaServiceService } from './pza-service.service';

describe('PzaServiceService', () => {
  let service: PzaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PzaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
