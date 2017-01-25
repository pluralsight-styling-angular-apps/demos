import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AccordionPaneComponent } from './accordion-pane.component';

@Component({
    moduleId: module.id,
    selector: 'saa-accordion',
    templateUrl: 'accordion.component.html',
    styleUrls: ['accordion.component.css']
})

export class AccordionComponent {
    @ContentChildren(AccordionPaneComponent) items: QueryList<AccordionPaneComponent>;

    ngAfterContentInit() {
        let activeItems = this.items.filter((item)=>item.active);
    }

    selectItem(item: AccordionPaneComponent){
        if (!item.active) {
            item.active = true;
        } else {
            item.active = false;
        }
    }

}