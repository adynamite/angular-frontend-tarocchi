import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LocalStorageService } from 'ngx-webstorage';
import {ReadingRequestPayload} from './reading.payload';
import { AuthService } from '../authservice/auth.service';


import { tarotCards, TarotCards } from '../data';
declare var $: any;


@Component({
  selector: 'app-select-card',
  templateUrl: './select-card.component.html',
  styleUrls: ['./select-card.component.css']
})

export class SelectCardComponent implements OnInit {

  readingRequestPayload: ReadingRequestPayload;

  tarokki = tarotCards;
  
  

  constructor(private router: Router,private cookie: CookieService,
    private localStorage: LocalStorageService, private authService:AuthService ) {
    
    this.readingRequestPayload = {
      email: '',
      letturaPassato:'', 
      letturaPresente:'',
      letturaFuturo:'',
      cartaPassato:'', 
      cartaPresente:'', 
      cartaFuturo:'',
    };


   }


  controlloLogin(){
    
    
    if (this.cookie.get('user')==='ospite' && this.localStorage.retrieve('user') === null ) {

      (<HTMLInputElement> document.getElementById("attiva")).disabled = true;
      console.log('ulteriori giocate');
      $("#popupcookie").modal("toggle");
    
    }

    this.cookie.set('user','ospite');


  }


  ngOnInit(): void {

  }

   
   selectedCards = new Array(9).fill("../assets/images/cartaF.png");
   
   display = new Array(3).fill("../assets/images/frame.jpg");
   count = 0;

  
   

   
   selectCard(position: any){
    // console.log(position)

    
    this.display[this.count] = "../assets/images/cartaF.png";
    if(this.count<3){
    this.selectedCards[position] = "../assets/images/frame.jpg";
    }

    this.count++;

    if(this.count==3){
      (<HTMLInputElement> document.getElementById("button")).disabled = false;
    } 

    (<HTMLInputElement> document. getElementById("button")).addEventListener("click", () => {
      (<HTMLInputElement> document.getElementById("attiva")).disabled = false;
     
    });

    
  }

   


  flip() {
    $('.card').toggleClass('flipped');
  }



  tarokkiCasuali = this.getRandomCards();
  passato = this.tarokkiCasuali[0].imgUrl;
  presente = this.tarokkiCasuali[1].imgUrl;
  futuro = this.tarokkiCasuali[2].imgUrl;
  nomePassato=this.tarokkiCasuali[0].name;
  nomePresente=this.tarokkiCasuali[1].name;
  nomeFuturo=this.tarokkiCasuali[2].name;
  letturaPassato=this.tarokkiCasuali[0].letturaPassato;
  letturaPresente=this.tarokkiCasuali[1].letturaPresente;
  letturaFuturo=this.tarokkiCasuali[2].letturaFuturo;


  reading(){
    this.readingRequestPayload.email=this.authService.getEmail();
    this.readingRequestPayload.cartaPassato=this.nomePassato;
    this.readingRequestPayload.cartaPresente=this.nomePresente;
    this.readingRequestPayload.cartaFuturo=this.nomeFuturo;
    this.readingRequestPayload.letturaPassato=this.letturaPassato;
    this.readingRequestPayload.letturaPresente=this.letturaPresente;
    this.readingRequestPayload.letturaFuturo=this.letturaFuturo;
 console.log(this.readingRequestPayload.email);

 this.authService.reading(this.readingRequestPayload)
 .subscribe(data => {
   this.router.navigate(['/lettura'],
     { queryParams: { reading: 'true' } });
 }, error => {
   console.log(error);
   
 });
  }


  getRandomCards() {
    let taroks = [];

    let i = Math.floor(Math.random() * this.tarokki.length);
    var passato = this.tarokki[i];
    taroks[0] = passato;
    this.tarokki.splice(i, 1);

    let d = Math.floor(Math.random() * this.tarokki.length);
    var presente = this.tarokki[d];
    taroks[1] = presente;
    this.tarokki.splice(d, 1);
    var futuro = this.tarokki[Math.floor(Math.random() * this.tarokki.length)];

    taroks[1] = presente;
    taroks[2] = futuro;
    this.flip();
    return taroks;
  }

  shuffle(array:any) {
    this.flip();
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    
    while (0 !== currentIndex) {
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }



}
