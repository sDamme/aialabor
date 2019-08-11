import { Directive, ElementRef, ViewChild, HostListener} from '@angular/core';

@Directive({
  selector: '[appInfoOverlay]'
})
export class InfoOverlayDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "yellow";

    console.log(el);
   }
   showProduct = true;
  @HostListener('click', ['$event'])
  clickEvent(event) {
    this.showProduct = !this.showProduct;
  }



}
