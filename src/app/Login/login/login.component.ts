import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  //* formulario de login
  /**
   * Formulario para el inicio de sesion sin google
   */
  LoginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  public spinner: boolean = false;
  private json: any;
  
  dataInfo: string = "";
  alertVisible: boolean = false;

  constructor(private SingIn: AuthService, private route: Router) {}

  ngOnInit(): void {}

  /**
   * varibles para definir el uso del alert (notificación )
   */
  miMensaje = '¡Hola!, inicio de sesión exitoso';
  notificationVisible = false;

  /**
   * Funcion para mostrar notificación 
   */
  showNotification() {
    this.notificationVisible = true;
    setTimeout(() => this.notificationVisible = false, 3000); // La notificación se ocultará después de 3 segundos
  }

  //* valido los datos ingresados en el login 
  onSubmit() {
    //console.log('welcome');
    this.SingIn.singIn(this.LoginForm.value)
      .then((response: any) => {
        
        //console.log('submit response : ', response );
        
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
        
        //* apago el alert devolviendo su valor a flase
        this.alertVisible = false

      })
      .catch((error) => console.log(error));


  }

  //* Inicio de sesi+on con google
  LoginGoogle() {
    this.SingIn.singInGoogle()
      .then((response) => {
        //console.log(response);
        this.spinner = true;
        setTimeout(() => {
          this.spinner = true;
        }, 5000);
        this.route.navigate(['/home']);
      })
      .catch((error) => console.log(error));
  }

  /**
   * Función para mostrar alertas (notificaciones)
   */
  showAlert() {
    //* activo el alert para mensaje de errores
    this.alertVisible = true;
  }
}
