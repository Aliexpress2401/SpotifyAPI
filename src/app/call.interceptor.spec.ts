import { TestBed } from '@angular/core/testing';

import { CallInterceptor } from './call.interceptor';

describe('CallInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CallInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CallInterceptor = TestBed.inject(CallInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
