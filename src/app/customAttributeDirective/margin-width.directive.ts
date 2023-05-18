import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMarginWidth]'
})
export class MarginWidthDirective {

  @Input() margin: string = '';
  @Input() width: string = '';


  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'margin', this.margin);
    this.renderer.setStyle(this.el.nativeElement, 'width', this.width);
  }



}
