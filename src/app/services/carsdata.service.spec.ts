import { TestBed } from '@angular/core/testing';

import { CarsdataService } from './carsdata.service';

describe('CarsdataService', () => {
  let service: CarsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
