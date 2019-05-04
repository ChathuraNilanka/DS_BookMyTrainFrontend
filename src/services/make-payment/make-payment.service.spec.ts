import { TestBed } from '@angular/core/testing';

import { MakePaymentService } from './make-payment.service';

describe('MakePaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MakePaymentService = TestBed.get(MakePaymentService);
    expect(service).toBeTruthy();
  });
});
