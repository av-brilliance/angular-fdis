import { TestBed } from '@angular/core/testing';

import { ImageupService } from './imageup.service';

describe('ImageupService', () => {
  let service: ImageupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
