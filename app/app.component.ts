import { AppModule } from './app.module';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'saa-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {

  pills = [
    { 
      label: 'HTML'
    },
    { 
      label: 'CSS'
    },
    { 
      label: 'SASS'
    }
  ];

}