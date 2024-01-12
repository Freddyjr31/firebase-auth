import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  //* Parametros recibidos que se mostraran en el alert
  @Input() showNotification = false;
  @Input() notificationMessage = '';

  closeNotification() {
    this.showNotification = false;
  }
}
