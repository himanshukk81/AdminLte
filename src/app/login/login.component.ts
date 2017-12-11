import { Component, OnInit } from '@angular/core';
import { AdminDashboard1Component } from '../admin/admin-dashboard1/admin-dashboard1.component';
import { Router } from '@angular/router'
import { SessionService } from '../session.service'
import { AuthService } from '../admin/auth.service';
import { PhoneLoginComponent } from '../phone-login/phone-login.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userInfo:any;

  user:any={};
  constructor(public authService: AuthService,public router:Router,public service:SessionService) { }

  ngOnInit() {

      if(this.service.getUser())
        {
          this.router.navigate(['/admin']);    
        }
  }

  login()
  {
    // this.userInfo={};
    // this.userInfo.email="Himanshukk81@gmail.com";
    // this.userInfo.password=12345;
    // this.service.setUser(this.userInfo); 
    // this.router.navigate(['/admin']);
    // setTimeout(()=>{
    //   this.router.navigate(['/admin']);
    // },2000)
    this.authService.login(this.user.email, this.user.password);
    this.user.email = this.user.password = '';
    

   
  }


  signup() {
    this.authService.signup(this.user.email, this.user.password);
    this.user.email = this.user.password = '';
  }

  // login() {
  //   this.authService.login(this.email, this.password);
  //   this.email = this.password = '';    
  // }

  logout() {
    this.authService.logout();
  }

  signInWithFacebook()
  {
    this.authService.signInWithFacebook().then((res) => { 
        // this.router.navigate(['dashboard'])

        console.log("Login Success by faceboook");
      })
    .catch((err) =>{
      console.log("Login Failed by facebook="+err);
    });
  }

  signInWithTwitter()
  {
    this.authService.signInWithTwitter().then((res) => { 
      // this.router.navigate(['dashboard'])

      console.log("Login Successfull");
    })
  .catch((err) =>{
    console.log("login failed by twiiter==="+err);
    }) 
  }

  signInWithGithub()
  {
    this.authService.signInWithGithub().then((res) => { 
      // this.router.navigate(['dashboard'])
      console.log("Login Success by git hub");
    })
    .catch((err) =>{
        console.log("login failed by git hub==="+err)
      });
  } 
  
  signInWithGoogle()
  {
    this.authService.signInWithGoogle().then((res) => { 
      this.router.navigate(['admin'])
      console.log("Login Successfully from google");
    })
    .catch((err) => {
      console.log("login failed=="+err);
    })

  }

  signInWithPhone()
  {
    this.router.navigate(['/phone']);
  }

  gotoFireStore()
  {
    this.router.navigate(['/firestore']);
  }
}
