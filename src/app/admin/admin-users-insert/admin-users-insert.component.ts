import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';
// var randomstring = require("randomstring");
import {FileUpload} from './fileupload';

import {SessionService} from '../../session.service';


@Component({
  selector: 'app-admin-users-insert',
  templateUrl: './admin-users-insert.component.html',
  styleUrls: ['./admin-users-insert.component.css']
})

// declare var first:true;
export class AdminUsersInsertComponent implements OnInit {
  params:any;
  user:any={};
  image:any;
  newImage:any;
  selectedFiles:any;
  currentFileUpload:any;
  userInfoUpdated:any;
  progress: {percentage: number} = {percentage: 0}
  constructor(public service:SessionService,public router:Router,public route:ActivatedRoute,public db:AngularFireDatabase) { }

  ngOnInit() {

      // alert(this.route);
    //  console.log(this.route.snapshot.queryParamMap);

    
    this.params= this.route.snapshot.queryParams["userKey"];
    if(this.params)
    {
      this.getUserInfo();
    }
    
    console.log("params=="+this.params);
  }
  

  getUserInfo()
  {
    var item=this.db.list('/user_detail',{
        query:{
          orderByChild:'key',
          equalTo:this.params,
        },
      }).subscribe(snapshot =>{
         this.user=snapshot[0];   
         this.userInfoUpdated=snapshot[0]; 
        },error=>{
          var err1="Error=="+error;
          alert("Failed to fetch info please try again");
        });
  }
  goBackUser()
  {
     this.router.navigate(['/admin/users']);
  }

  selectFile(event) {
     
    // this.image=event.srcElement.files;
    const file = event.target.files.item(0);
    // this.newImage=event.target.files.item(0);;
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
      const file = this.selectedFiles.item(0)
      // this.selectedFiles = undefined;
      this.currentFileUpload = new FileUpload(file);
    } else {
      alert('invalid format!');
    }
  }

generateString() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
  saveUser()
  {
    // alert("saving");
    this.verifyUser(this.user.email);
  }
  updateUser()
  {
    
    this.verifyUser(this.user.email); 
  }
  insertUser()
  {
    this.user.token=this.service.getToken();
    this.db.list('/user_detail').push(this.user).then(({key}) => {
        console.log('all good');
        this.user.key=key;
        this.updateKey(this.user)
      }, reject => {
        alert("Please try again");
        console.log('error');
      })
  }
  
  updateKey(user)
  {
      this.db.object('/user_detail/'+user.key).update(user).then((profile: any) => {
          // return new Response('Profile has been saved successfully');

            this.goBackUser();
            console.log("Successfully updated location====")
          //  this.showToast("Successfully updated location====");
        })
      .catch((err: any) => {
          // this.goBackUser();
          // return new Response('Unable to save profile at this time, please try again later.');
          var error="error=="+err;
          // this.showToast(error);
      });
  }
  imageUpload()
  {
    if(this.selectedFiles)
    {
      const storageRef = firebase.storage().ref()
      if(this.params)
      {
        storageRef.child(`images/${this.user.fileName}`).delete();
      }
      var filename=this.currentFileUpload.file.name;
      const uploadTask = storageRef.child(`images/${filename}`).put(this.currentFileUpload.file);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // in progress
          const snap = snapshot as firebase.storage.UploadTaskSnapshot
          this.progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
        },
        (error) => {
          // fail
          console.log(error)
        },
        () => {
          // success
          this.user.imageUrl = uploadTask.snapshot.downloadURL;
          this.user.fileName = filename;
          if(this.params)
          {
            this.updateUserInfo();
          }
          else
          {
            this.insertUser();
          }
        }
      );
    }  
  }

  updateUserInfo()
  {
    this.db.object('/user_detail/'+this.user.key).update(this.user).then((profile: any) => {
      this.goBackUser();  
      console.log("Successfully updated location====")
    })
    .catch((err: any) => {
      // return new Response('Unable to save profile at this time, please try again later.');
      var error="error=="+err;
    });
  }
  verifyUser(email)
  {
    var email=email.toLowerCase();
    email=email.replace(/\s/g, ""); 
    this.user.email=email;
    var first=true;
    var item=this.db.list('/user_detail',{
      query:{
        orderByChild:'email',
        equalTo:email,
        
      },
    }).subscribe(snapshot => {


      if(first)
      {
        if(snapshot.length>0)
        {
          if(this.params)
          {
            if(this.user.email!=this.userInfoUpdated.email)
            {
              alert("Email Id already exist for this user");
            }
            else if(this.selectedFiles)
            {
              this.imageUpload();
            }
            else 
            {
              this.updateUserInfo();
            }
           
          }
          else
          {
            alert("Email Id already exist");
          }
          
        }
        else if(this.selectedFiles)
        {
          this.imageUpload();
        }
        else if(this.params)
        {
          this.updateUserInfo();
          // this.registerUser(data)
        }
        else
        {
          this.insertUser();
        }
        first=false;
      }
      
    },error=>{
      return;
    })     
  }
  

}
