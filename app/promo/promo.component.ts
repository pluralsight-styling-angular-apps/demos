import { Component, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'saa-promo',
    templateUrl: 'promo.component.html',
    styleUrls: ['promo.component.css']
})

export class PromoComponent {
    themeClassNames;
    isColor01 = false;

    constructor(private hostRef: ElementRef) {}

    ngAfterContentInit() {
        this.themeClassNames = this.hostRef.nativeElement.className.split(' ');
        if (this.themeClassNames.indexOf('color--01') > -1) {
            this.isColor01 = true;
        }
    }

}