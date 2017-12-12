import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'
@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(public firebaseAuth: AngularFireAuth,public router:Router) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.router.navigate(['admin'])
      })
      .catch(err => {
        alert("Error==="+err.message);
        console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this.router.navigate(['admin'])
      })
      .catch(err => {
        alert("Error==="+err.message);
        console.log('Something went wrong:',err.message);
      });
  }


  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  signInWithFacebook()
  {
    return this.firebaseAuth.auth.signInWithPopup(
        new firebase.auth.FacebookAuthProvider()
      )
  }


  signInWithTwitter() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    )
  }

  signInWithGithub(){
    return this.firebaseAuth.auth.signInWithPopup(
        new firebase.auth.GithubAuthProvider()
      )  
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}