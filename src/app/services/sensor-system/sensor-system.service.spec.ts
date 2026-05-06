import { TestBed } from '@angular/core/testing';

import { SensorSystemService } from './sensor-system.service';

describe('SensorSystemService', () => {
  let service: SensorSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
