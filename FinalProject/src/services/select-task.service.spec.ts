import { TestBed } from '@angular/core/testing';

import { SelectTaskService } from './select-task.service';

describe('SelectTaskService', () => {
  let service: SelectTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
