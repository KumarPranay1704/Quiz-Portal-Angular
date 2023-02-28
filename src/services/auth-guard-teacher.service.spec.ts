import { TestBed } from '@angular/core/testing';

import { AuthGuardTeacherService } from './auth-guard-teacher.service';

describe('AuthGuardTeacherService', () => {
  let service: AuthGuardTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
