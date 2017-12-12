import { Component, OnInit } from '@angular/core';
import { WindowService } from '../window.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router'
import { SessionService } from '../session.service'

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {
  windowRef: any;
  phoneNumber = new PhoneNumber()
  verificationCode: string;
  user: any;
  constructor(public service:SessionService,public router:Router, private win: WindowService) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')
    this.windowRef.recaptchaVerifier.render()
    
  }
  
  sendLoginCode() {
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.e164;
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {
                this.windowRef.confirmationResult = result;
            })
            .catch( error => console.log(error) );
  }
  verifyLoginCode() {
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then( result => {
        this.user = result.user;
        this.service.setUser(this.user);
        this.router.navigate(['admin'])
    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }

  
  
}

export class PhoneNumber {
  country: string;
  area: string;
  prefix: string;
  line: string;
  // format phone numbers as E.164
  get e164() {
    const num = this.country + this.line
    return `+${num}`
  }
}
