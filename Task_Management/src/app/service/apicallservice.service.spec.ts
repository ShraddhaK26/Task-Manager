import { TestBed } from '@angular/core/testing';

import { ApicallserviceService } from './apicallservice.service';

describe('ApicallserviceService', () => {
  let service: ApicallserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicallserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
