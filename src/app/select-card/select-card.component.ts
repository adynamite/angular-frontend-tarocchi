import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LocalStorageService } from 'ngx-webstorage';


import { tarotCards, TarotCards } from '../data';
declare var $: any;

@Component({
  selector: 'app-select-card',
  templateUrl: './select-card.component.html',
  styleUrls: ['./select-card.component.css']
})

export class SelectCardComponent implements OnInit {

  tarokki = tarotCards;
  
  

  constructor(private router: Router,private cookie: CookieService,private localStorage: LocalStorageService ) {
   
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

   // Images for the cards on list
   selectedCards = new Array(9).fill("../assets/images/cartaF.png");
   // Images for selected cards
   display = new Array(3).fill("../assets/images/frame.jpg");
   count = 0;

  
   

   // Select cards
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

    /*// When three cards are selected, navigate to reading
    if (this.count == 3) {
      this.router.navigate(['/reading'],  { queryParams: { 'reading': this.reading } })
    }*/



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

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }



}
