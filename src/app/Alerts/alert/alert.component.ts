import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  //showAlert = false;
  @Input() alertMessage: string | undefined;
  @Input() showAlert: boolean = false;


  closeAlert() {
    this.showAlert = false;
  }

}
