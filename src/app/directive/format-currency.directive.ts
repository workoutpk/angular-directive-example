import { Directive, ElementRef, HostListener } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Directive({
    selector: '[formatCurrency]'
})
export class FormatCurrencyDirective {

    constructor(private el: ElementRef, private currencyPipe: CurrencyPipe) { }

    @HostListener('input', ['$event'])
    onInput($event:any) {
        // Format the number as a currency.
        const formattedNumber = this.currencyPipe.transform($event.target.value);

        // Set the formatted number on the element.
        this.el.nativeElement.textContent = formattedNumber;
    }

    /*
    This directive has a single selector, [formatCurrency]. This means that the directive can be applied to any element with the formatCurrency attribute.

    The directive also has a single host listener, @HostListener('input', ['$event']). This listener will be called when the element's value is changed. The $event parameter will contain the event object that was triggered by the change.

    In the listener, the directive uses the CurrencyPipe to format the number as a currency. The formatted number is then set on the element's textContent property.

    To use the directive, you can add it to an element in your HTML template:
    */
}
