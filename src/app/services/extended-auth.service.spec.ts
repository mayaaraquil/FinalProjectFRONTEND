import { TestBed } from '@angular/core/testing';

import { ExtendedAuthService } from './extended-auth.service';

describe('ExtendedAuthService', () => {
  let service: ExtendedAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtendedAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
