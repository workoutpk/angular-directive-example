import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
@Directive({
    selector: '[appMy]',
})
export class MyDirective {
    @Input() appMy: any = 'red';

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('click', ['$event'])
    onMyDirectiveClick($event: any) {
        console.log('click event ', $event);

        // Do something when the element is clicked.
    }

    ngOnInit() {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appMy);
    }
}
