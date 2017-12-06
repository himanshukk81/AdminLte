import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';
// var randomstring = require("randomstring");
import {FileUpload} from './fileupload';



@Component({
  selector: 'app-admin-users-insert',
  templateUrl: './admin-users-insert.component.html',
  styleUrls: ['./admin-users-insert.component.css']
})
export class AdminUsersInsertComponent implements OnInit {
  params:any;
  user:any={};
  selectedFiles:any;
  currentFileUpload:any;
  progress: {percentage: number} = {percentage: 0}
  constructor(public router:Router,public route:ActivatedRoute,public db:AngularFireDatabase) { }

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
    const file = event.target.files.item(0)

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
    
    var filename=this.currentFileUpload.file.name;
    if(this.selectedFiles)
      {
        const storageRef = firebase.storage().ref();
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
            this.insertUser()
          }
        );
      }

    else
      {
        this.insertUser();
      }
      
  }


  insertUser()
  {
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

  updateUser()
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

}
