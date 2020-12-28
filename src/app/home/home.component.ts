import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './index.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

 // The typewriter element
var typeWriterElement = document.getElementById('typewriter');


// The TextArray: 
var textArray = ["Premi sulla sfera di cristallo per la lettura dei tarocchi! "];

// You can also do this by transfering it through a data-attribute
// var textArray = typeWriterElement.getAttribute('data-array');



// function to generate the keyhitting effect
function typeWriter(text:any, i:any, cb:any) {
	if ( i < text.length+1 ) {

    if(typeWriterElement==null) alert('Elemento nullo!')
    else
		typeWriterElement.innerHTML = text.substring(0, i++);
		// generate a random Number to emulate Typing on the Keyboard.
		var rndTyping = 250 - Math.random() * 100;
		setTimeout( function () { 
			typeWriter(text, i++, cb)
		},rndTyping);
	} else if (i === text.length+1) {
		setTimeout( function () {
			
		},1000);
	}
};

// the main writer function
function StartWriter(i:any) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},1000);
	} else if(i < textArray[i].length+1) {
		typeWriter(textArray[i], 0, function () {
			StartWriter(i+1);
		});
	}  
};
// wait one second then start the typewriter
setTimeout( function () {
	StartWriter(0);
},1000);
  }

  
}
