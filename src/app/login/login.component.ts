import { Component, OnInit } from '@angular/core';
import { AdminDashboard1Component } from '../admin/admin-dashboard1/admin-dashboard1.component';
import { Router } from '@angular/router'
import { SessionService } from '../session.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userInfo:any;
  constructor(public router:Router,public service:SessionService) { }

  ngOnInit() {

      if(this.service.getUser())
        {
          this.router.navigate(['/admin']);    
        }
  }

  login()
  {
    this.userInfo={};
    this.userInfo.email="Himanshukk81@gmail.com";
    this.userInfo.password=12345;
    this.service.setUser(this.userInfo); 
    this.router.navigate(['/admin']);
    // setTimeout(()=>{
    //   this.router.navigate(['/admin']);
    // },2000)

    

   
  }

}
