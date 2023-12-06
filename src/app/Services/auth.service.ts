import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth) { }

  registerUser({username,password}:any){
    return createUserWithEmailAndPassword(this.auth, username, password)
  }

  singIn({username,password}:any){
    return signInWithEmailAndPassword(this.auth, username, password)
    .then((response) => {
      console.log(response)
      var responseFetch:any = {}
      responseFetch = {'code': 200, 'message': 'Usuario autenticado', 'data': response }
      return responseFetch
    })
    .catch(error => {
      console.log(error)
      var response = {}

      if(error.code == 'auth/invalid-login-credentials' ){
        response = {'code': 400, 'message': 'credenciales invalidas'}
      }

      if(error.code == 'auth/invalid-email'){
        response = {'code': 400, 'message': 'correo invalido'}
      }
      
      return response
    })
  }

  singInGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider())
  }

  logout(){
    return signOut(this.auth)
  }

}
