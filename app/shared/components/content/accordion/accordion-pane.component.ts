import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'saa-accordion-pane',
    templateUrl: 'accordion-pane.component.html',
    styleUrls: ['accordion-pane.component.css']
})

export class AccordionPaneComponent {
    @ViewChild(TemplateRef) template;
    @Input('title') title: string;
    @Input() active = false;
}