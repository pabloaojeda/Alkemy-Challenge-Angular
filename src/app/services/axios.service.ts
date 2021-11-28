import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios, { Axios } from 'axios';
import { Heroe } from '../interface/heroe';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  urlalkemy: string = 'http://challenge-react.alkemy.org/';
  apiheroes: string = 'https://superheroapi.com/api/2043777549115321/';
  // personaje: Heroe = {
  //   appearance: '',
  //   biography: '',
  //   connections: '',
  //   id: 0,
  //   image: '',
  //   name: '',
  //   powerstats: '',
  //   work: '',
  // };
  personaje: any;
  public personajeString: any = {};

  constructor(private router: Router) {}

  login(email: string, password: string) {
    return axios.post(`${this.urlalkemy}`, { email, password }).then((res) => {
      console.log(res);
      this.setToken(res.data.token);
      this.router.navigate(['home']);
    });
  }

  getHeroe(id: number) {
    return axios.get(`${this.apiheroes}${id}`);
    // .then((res) => {
    //   this.personaje = res.data;
    // this.personajeString = JSON.stringify(this.personaje);
    // console.log(this.personajeString);
    // console.log(this.personaje);
    // return this.personaje;
    // });
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
