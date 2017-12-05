import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  constructor(public db: AngularFireDatabase) {
    this.users = db.list('/user_detail');
   }

  ngOnInit() {
  }

}
