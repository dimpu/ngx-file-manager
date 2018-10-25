import { TestBed } from '@angular/core/testing';

import { NgxFileManagerService } from './ngx-file-manager.service';

describe('NgxFileManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFileManagerService = TestBed.get(NgxFileManagerService);
    expect(service).toBeTruthy();
  });
});
