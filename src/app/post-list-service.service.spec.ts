import { TestBed } from '@angular/core/testing';

import { PostListServiceService } from './post-list-service.service';

describe('PostListServiceService', () => {
  let service: PostListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
