import { TestBed } from '@angular/core/testing';

import { PersonmanagerService } from './personmanager.service';

describe('PersonmanagerService', () => {
  let service: PersonmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
