import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[dragAndDropFile]',
})
export class DragAndDropFileDirective {
    constructor(private el: ElementRef) { }

    @HostListener('dragover', [])
    onDragOver() {
        // Set the cursor to a move cursor.
        this.el.nativeElement.style.cursor = 'move';
    }

    @HostListener('dragleave', [])
    onDragLeave() {
        // Reset the cursor to the default cursor.
        this.el.nativeElement.style.cursor = '';
    }

    @HostListener('drop', ['$event'])
    onDrop($event:any) {
        // Get the files that were dropped.
        const files = $event.target.files;

        // Do something with the files.
    }

    @Output()
    onFileDropped = new EventEmitter<File[]>();

    /* This directive has a single selector, [dragAndDropFile]. This means that the directive can be applied to any element with the dragAndDropFile attribute.

    The directive has three host listeners:
    
    @HostListener('dragover', []) is called when the element is being dragged over.
    @HostListener('dragleave', []) is called when the element is no longer being dragged over.
    @HostListener('drop', ['$event']) is called when the element is dropped.
    The @HostListener decorators allow the directive to listen for events that are fired by the browser.
    
    The directive also has an output property, onFileDropped. This property is emitted when files are dropped on the element. The property emits an array of File objects.
    
    To use the directive, you can add it to an element in your HTML template: */
}
