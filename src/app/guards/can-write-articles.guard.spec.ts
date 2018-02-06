import { TestBed, async, inject } from '@angular/core/testing';

import { CanWriteArticlesGuard } from './can-write-articles.guard';

describe('CanWriteArticlesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanWriteArticlesGuard]
    });
  });

  it('should ...', inject([CanWriteArticlesGuard], (guard: CanWriteArticlesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
