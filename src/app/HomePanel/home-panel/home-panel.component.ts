import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-home-panel',
  templateUrl: './home-panel.component.html',
  styleUrls: ['./home-panel.component.css']
})
export class HomePanelComponent {

  constructor(private aut:AuthService, private route:Router){}

  Logout(){
    this.aut.logout().then(
      response => {
        this.route.navigate(['/login'])
      }
    ).catch((error) => console.log)
  }
}
