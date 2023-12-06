import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  public spinner: boolean = false;
  private json: any;
  public dataInfo: string = "";
  public alertVisible: boolean = false;

  constructor(private SingIn: AuthService, private route: Router) {}

  ngOnInit(): void {}

  miMensaje = 'Hola desde el componente padre';
  notificationVisible = false;

  showNotification() {
    this.notificationVisible = true;
    setTimeout(() => this.notificationVisible = false, 3000); // La notificación se ocultará después de 3 segundos
  }

  onSubmit() {
    console.log('welcome');
    this.SingIn.singIn(this.LoginForm.value)
      .then((response: any) => {
        console.log('submit response : ', response );
        
        this.spinner = true;
        this.dataInfo = response.message

        if (response.code == 400) {
          setTimeout(() => {
            this.showAlert()
            this.spinner = false;
          }, 3000);
        }

        if (response.code == 200) {
          
          this.spinner = false;
          this.showNotification()
          setTimeout(() => {
            this.route.navigate(['/home']);
          }, 4000);

        }
        
      })
      .catch((error) => console.log(error));
  }

  LoginGoogle() {
    this.SingIn.singInGoogle()
      .then((response) => {
        console.log(response);
        this.spinner = true;
        setTimeout(() => {
          this.spinner = true;
        }, 5000);
        this.route.navigate(['/home']);
      })
      .catch((error) => console.log(error));
  }

  showAlert() {
    return this.alertVisible = true;
  }
}
