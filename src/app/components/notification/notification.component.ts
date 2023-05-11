import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  // selector: '[app-notification]',
  // selector: '.app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  displayNotification: boolean = false;

  closeNotification(){
    this.displayNotification = true;
  }
}
