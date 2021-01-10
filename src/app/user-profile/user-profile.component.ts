import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../authservice/auth.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  email: string;
  constructor(private authService: AuthService, private router:Router) {
    this.email = this.authService.getEmail();
   
   }

  ngOnInit(): void {
  }

  vaiAlleLetture(){
    this.router.navigateByUrl('user-profile/:emailLogin/letture');
  }

}
