import { ElementRef } from '@angular/core';
import { CreatedAteDirective } from './created-at.directive';

describe('FormatDateDirective', () => {
  it('should create an instance', () => {
    const directive = new CreatedAteDirective({} as ElementRef);
    expect(directive).toBeTruthy();
  });
});
