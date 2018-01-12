import { TestBed, inject } from '@angular/core/testing';

import { BucketService } from './bucket.service';

describe('AppointmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketService]
    });
  });

  it('should be created', inject([BucketService], (service: BucketService) => {
    expect(service).toBeTruthy();
  }));
});
