import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AxiosService } from '../services/axios.service';
import { Heroe } from '../interface/heroe';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  probando: any;
  constructor(private axiosService: AxiosService, private router: Router) {}

  ngOnInit(): void {
    this.axiosService.getHeroe(643).then((res) => {
      this.probando = res.data;
      // this.personajeString = JSON.stringify(this.personaje);
      // console.log(this.personajeString);
      console.log(this.probando);
      return this.probando;
    });
  }

  searchHeroes() {
    const heroe1 = this.axiosService.getHeroe(644);
    console.log(heroe1);
  }
}
