import { TestBed } from '@angular/core/testing';

import { LoderInterceptor } from './loder.interceptor';

describe('LoderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoderInterceptor = TestBed.inject(LoderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
