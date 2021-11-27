import { Injectable } from '@angular/core';
import axios, { Axios } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  urlalkemy: string = 'http://challenge-react.alkemy.org/';
  apiheroes: string = 'https://superheroapi.com/api/2043777549115321';

  constructor() {}

  postDatos2() {
    return axios
      .post(`${this.urlalkemy}`, {
        email: 'challenge@alkemy.org',
        password: 'react',
      })
      .then((res) => {
        console.log(res);
      });
  }

  getDatos() {
    axios
      .get('https://superheroapi.com/api/2043777549115321/644', {})
      .then((res) => console.log(res));
  }

  // getHeroe() {
  //   return axios
  //     .get(`https://superheroapi.com/api/2043777549115321/644`, {})
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }

  // getHeroe2() {
  //   axios({
  //     method: 'get',
  //     url: `https://superheroapi.com/api/2043777549115321/644`,
  //     withCredentials: false,
  //     params: {
  //       access_token: 2043777549115321,
  //     },
  //   });
  // }
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
