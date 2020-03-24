import { TestBed } from '@angular/core/testing';

import { PhotoFetchService } from './photo-fetch.service';

describe('PhotoFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoFetchService = TestBed.get(PhotoFetchService);
    expect(service).toBeTruthy();
  });
});
