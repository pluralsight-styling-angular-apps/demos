import { Component, ContentChild } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'saa-message',
    templateUrl: 'message.component.html',
    styleUrls: ['message.component.css']
})

export class MessageComponent {
    @ContentChild('messageContent') 'messageContent';
}