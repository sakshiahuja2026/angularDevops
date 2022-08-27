import { TestBed } from '@angular/core/testing';

import { AuthTokenGuardService } from './auth-token.guard.service';

describe('AuthTokenGuardService', () => {
  let service: AuthTokenGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthTokenGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
