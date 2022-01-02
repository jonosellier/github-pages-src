import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTimelineFadeIn]',
})
export class TimelineFadeInDirective {
  private fadeInObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('seen');
        }
      });
    },
    {
      rootMargin: '0px',
      threshold: 0.5,
    }
  );

  constructor(el: ElementRef) {
    this.fadeInObserver.observe(el.nativeElement);
  }
}
