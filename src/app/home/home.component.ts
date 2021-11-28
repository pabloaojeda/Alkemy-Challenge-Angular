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
  name: string = '';
  constructor(private axiosService: AxiosService, private router: Router) {}

  ngOnInit(): void {
    //   this.axiosService.getHeroe(643).then((res) => {
    //     this.probando = res.data;
    //
    //     console.log(this.probando);
    //     return this.probando;
    //   });
  }

  searchHeroes(name: string) {
    this.axiosService.getHeroes(name).then((res) => {
      this.probando = res.data.results;
      console.log(this.probando);
      return this.probando;
    });
  }
}
