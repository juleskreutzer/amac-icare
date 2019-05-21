import { TestBed } from '@angular/core/testing';

import { ProductChooserObjectGeneratorService } from './product-chooser-object-generator.service';

describe('ProductChooserObjectGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductChooserObjectGeneratorService = TestBed.get(ProductChooserObjectGeneratorService);
    expect(service).toBeTruthy();
  });
});
