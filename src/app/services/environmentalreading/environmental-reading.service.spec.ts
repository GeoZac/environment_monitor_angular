import { TestBed } from '@angular/core/testing';

import { EnvironmentalReadingService } from './environmental-reading.service';

describe('EnvironmentalReadingService', () => {
  let service: EnvironmentalReadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvironmentalReadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
