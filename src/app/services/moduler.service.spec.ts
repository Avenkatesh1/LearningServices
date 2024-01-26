import { TestBed } from '@angular/core/testing';

import { ModulerService } from './moduler.service';

describe('ModulerService', () => {
  let service: ModulerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModulerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
