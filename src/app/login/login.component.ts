import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AxiosService } from '../services/axios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private axiosService: AxiosService, private router: Router) {}

  ngOnInit(): void {
    this.axiosService.getHeroe();
  }

  login(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }
    const { email, password } = loginForm.value;
    this.axiosService.login(email, password);
  }
}
