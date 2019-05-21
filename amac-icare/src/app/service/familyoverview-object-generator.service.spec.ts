import { TestBed } from '@angular/core/testing';

import { FamilyoverviewObjectGeneratorService } from './familyoverview-object-generator.service';

describe('FamilyoverviewObjectGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FamilyoverviewObjectGeneratorService = TestBed.get(FamilyoverviewObjectGeneratorService);
    expect(service).toBeTruthy();
  });
});
