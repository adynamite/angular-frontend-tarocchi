import { Component, OnInit } from '@angular/core';

import { AuthService } from '../authservice/auth.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  email: string;
  constructor(private authService: AuthService) {
    this.email = this.authService.getEmail();
   
   }

  ngOnInit(): void {
  }

}
