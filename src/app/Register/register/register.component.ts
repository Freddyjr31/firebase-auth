import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  SingUPForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private registerService: AuthService, private route:Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('welcome');
    console.log(this.SingUPForm.value);

    this.registerService
      .registerUser(this.SingUPForm.value)
      .then((response) => {
        console.log(response);
        this.route.navigate(['/login'])
      })
      .catch((error) => console.log(error));
  }
}
