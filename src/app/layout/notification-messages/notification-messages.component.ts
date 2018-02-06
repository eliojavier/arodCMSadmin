import { Component, OnInit } from '@angular/core';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-notification-messages',
  templateUrl: './notification-messages.component.html',
  styleUrls: ['./notification-messages.component.scss']
})
export class NotificationMessagesComponent implements OnInit {

  constructor(public _notificationService: NotificationsService) { }

  ngOnInit() {
  }

  successMessage(title, subtitle) {
    this._notificationService.success(
      title,
      subtitle,
      {
        timeOut: 2000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: true,
      }
    );
  }

  errorMessage(title, subtitle) {
    this._notificationService.error(
      title,
      subtitle,
      {
        timeOut: 2000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: true,
      }
    );
  }

}
