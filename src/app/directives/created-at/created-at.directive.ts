import { Directive, ElementRef, afterRender } from '@angular/core';

@Directive({
  selector: '[created-at]',
  standalone: true
})
export class CreatedAteDirective {

  constructor(private element: ElementRef) {
    afterRender(() => {
      const startTime = this.getStartTime();
      const endTime = this.getEndTime();
      const differenceInMilliseconds = Math.abs(endTime - startTime);
      const resultInMinutes = Math.round(differenceInMilliseconds / 60000);
      this.setText(this.calculateTime(resultInMinutes));
    }, {});    
  }

  calculateTime(minutes: number) {
    if (minutes < 1) {
      return 'create just now'
    } else
    if (minutes > 10) {
      return 'created a long time ago'
    } else {
      return `created a ${minutes} minutes ago`
    }
  }

  getStartTime(): number {
    return Number(this.element.nativeElement.querySelector('p[created-at]').getAttribute('created-at'));
  }

  getEndTime(): number {
    return new Date().getTime();
  }

  setText (text: string) {
    this.element.nativeElement.querySelector('p[created-at]').innerText = text;
  }

  getText (): string {
    return this.element.nativeElement.querySelector('p[created-at]').innerText;
  }

}
