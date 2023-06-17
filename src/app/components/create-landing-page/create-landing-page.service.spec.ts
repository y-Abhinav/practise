import { TestBed } from '@angular/core/testing';

import { CreateLandingPageService } from './create-landing-page.service';

describe('CreateLandingPageService', () => {
  let service: CreateLandingPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateLandingPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
