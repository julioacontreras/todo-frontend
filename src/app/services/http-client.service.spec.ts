import { TestBed } from '@angular/core/testing';

import { ItemRepositoryService } from './http-client.service';

describe('CrudItemService', () => {
  let service: ItemRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
