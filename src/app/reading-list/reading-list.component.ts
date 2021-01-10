import { Component, Input, OnInit } from '@angular/core';
import { ReadingModel } from '../reading-model.payload';
import {AuthService} from '../authservice/auth.service';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css']
})
export class ReadingListComponent implements OnInit {

   readings!:ReadingModel[];
    email!:string;
    value!:number;

 

  constructor(private authService:AuthService) {
  }

  ngOnInit(): void {
    this.email=this.authService.getEmail();
   
    this.authService.getAllReadingsByUser(this.email).subscribe(res => {
      this.readings = res;
  });

}

prendiIndice(i: number){
  this.value=i;
  console.log(i);
}

}
