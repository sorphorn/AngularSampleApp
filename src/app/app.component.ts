import { Component } from '@angular/core';
import { AlertMessageService } from './services/alert-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'my-app';
  constructor(private alertMessgeService: AlertMessageService){
  }
}

