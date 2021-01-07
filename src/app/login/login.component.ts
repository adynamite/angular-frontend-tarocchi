import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginRequestPayload } from './login-request.payload';
import { SignupRequestPayload } from './signup-request.payload';
import { AuthService } from '../authservice/auth.service';

import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router } from '@angular/router';
import { throwError } from 'rxjs';



declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './index.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loginRequestPayload: LoginRequestPayload;

  signupForm!: FormGroup;
  signupRequestPayload: SignupRequestPayload;

  registerSuccessMessage!: string ;
  isError!: boolean;



  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute,
    private router: Router, private toastr: ToastrService) {

      this.registerSuccessMessage="";

      this.signupRequestPayload = {
        username: '',
        email: '',
        password: ''
      };

    this.loginRequestPayload = {
      email: '',
      password: ''
    };
  }

  ngOnInit() {

    this.signupForm = new FormGroup({
      usernameSignup: new FormControl('', Validators.required),
      emailSignup: new FormControl('', [Validators.required, Validators.email]),
      passwordSignup: new FormControl('', Validators.required),
    });

    this.loginForm = new FormGroup({
      emailLogin: new FormControl('', Validators.required),
      passwordLogin: new FormControl('', Validators.required)
    });


    this.activatedRoute.queryParams
      .subscribe(params => {
        if (params.registered !== undefined && params.registered === 'true') {
          this.toastr.success('Registrazione avvenuta con successo');
          this.registerSuccessMessage = 'Verifica la tua casella inbox della posta '
            + 'ed attiva il tuo account prima di fare il login!';
        
        }
      });
  }

  login() {
    this.loginRequestPayload.email = this.loginForm.get('emailLogin')!.value;
    this.loginRequestPayload.password = this.loginForm.get('passwordLogin')!.value;

    this.authService.login(this.loginRequestPayload).subscribe(data => {
      this.isError = false;
      this.router.navigateByUrl('user-profile/'+ this.loginForm.get('emailLogin')!.value);
      this.toastr.success('Login Successful');
    }, error => {
      this.isError = true;
      throwError(error);
    });

  }

  signup() {

    
    this.signupRequestPayload.email = this.signupForm.get('emailSignup')!.value;
    this.signupRequestPayload.username = this.signupForm.get('usernameSignup')!.value;
    this.signupRequestPayload.password = this.signupForm.get('passwordSignup')!.value;
    

    this.authService.signup(this.signupRequestPayload)
      .subscribe(data => {
        this.router.navigate(['/login'],
          { queryParams: { registered: 'true' } });
      }, error => {
        console.log(error);
        this.toastr.error('La registrazione non è andata a buon fine! Ti prego di riprovare');
      });
  }
  

   toggleSignup(){
    document.getElementById("login-toggle")!.style.backgroundColor="#fff";
     document.getElementById("login-toggle")!.style.color="#222";
     document.getElementById("signup-toggle")!.style.backgroundColor="#FFC94C";
     document.getElementById("signup-toggle")!.style.color="#fff";
     document.getElementById("login-form")!.style.display="none";
     document.getElementById("signup-form")!.style.display="block";
 }
 
    toggleLogin(){
     document.getElementById("login-toggle")!.style.backgroundColor="#FFC94C";
     document.getElementById("login-toggle")!.style.color="#fff";
     document.getElementById("signup-toggle")!.style.backgroundColor="#fff";
     document.getElementById("signup-toggle")!.style.color="#222";
     document.getElementById("signup-form")!.style.display="none";
     document.getElementById("login-form")!.style.display="block";
 }
 
  
}
