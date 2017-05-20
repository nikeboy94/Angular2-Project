import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})

export class AutoGrowDirective {

    /*
    the private keyword makes the compiler automatically
    create and initialise those fields via dependency injection.
    its the same as having two variables defined
    _el: ElementRef;
    _renderer: Renderer;
    and having this._el = el; in the constructor
    */


    constructor(private el: ElementRef, private renderer: Renderer) {
    }


    onFocus() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }

    onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
    }
}