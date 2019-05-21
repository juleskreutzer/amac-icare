import { TestBed } from '@angular/core/testing';

import { ProductOverviewObjectGeneratorService } from './product-overview-object-generator.service';

describe('ProductOverviewObjectGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductOverviewObjectGeneratorService = TestBed.get(ProductOverviewObjectGeneratorService);
    expect(service).toBeTruthy();
  });
});
