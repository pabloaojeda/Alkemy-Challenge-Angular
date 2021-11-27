import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios, { Axios } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  urlalkemy: string = 'http://challenge-react.alkemy.org/';
  apiheroes: string = 'https://superheroapi.com/api/2043777549115321';

  constructor(private router: Router) {}

  login(email: string, password: string) {
    return axios.post(`${this.urlalkemy}`, { email, password }).then((res) => {
      console.log(res);
      this.setToken(res.data.token);
      this.router.navigate(['home']);
    });
  }

  getHeroe() {
    return axios.get(`${this.apiheroes}/644`, {}).then((res) => {
      console.log(res);
    });
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
}

// postDatos(){
//   axios.post('http://challenge-react.alkemy.org/', {
//     email: this.login.email,
//     password: this.login.password

//   })
//   .then(response => {
//     console.log(response);
//     this.getToken(response.data.token);
//     this.router.navigate(['home']);
//   });
