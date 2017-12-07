import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {Router} from '@angular/router';
// import {FileUpload} from '../../fileupload';
import * as firebase from 'firebase';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  constructor(public db: AngularFireDatabase,public router:Router) {
    this.users = db.list('/user_detail');
   }

  ngOnInit() {
  }


  addUser()
  {
    this.router.navigateByUrl('/admin/saveUser');
  }

  editUser(userKey)
  {
    this.router.navigate(['/admin/saveUser'],{ queryParams: { userKey:userKey }});
  }


  deleteUser(user)
  {
     var userKey=user.key;
     this.db.object('/user_detail/'+userKey).remove().then(() => {
                
                console.log("Successfully deleted");
                if(user.fileName)
                  {
                    this.deleteFileStorage(user.fileName)
                  }
            })
          .catch((err: any) => {
              // return new Response('Unable to save profile at this time, please try again later.');
              var error="error=="+err;
          });
  }

  
   deleteFileStorage(fileName) {
    const storageRef = firebase.storage().ref()
    storageRef.child(`images/${fileName}`).delete();
  }

}
