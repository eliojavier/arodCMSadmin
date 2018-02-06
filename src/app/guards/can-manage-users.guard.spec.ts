import { TestBed, async, inject } from '@angular/core/testing';

import { CanManageUsersGuard } from './can-manage-users.guard';

describe('CanManageUsersGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanManageUsersGuard]
    });
  });

  it('should ...', inject([CanManageUsersGuard], (guard: CanManageUsersGuard) => {
    expect(guard).toBeTruthy();
  }));
});
