import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomAvatar]'
})
export class CustomAvatarDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor  =  '#ebebeb';
   }

}
