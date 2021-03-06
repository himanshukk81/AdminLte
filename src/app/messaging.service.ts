import { Injectable }          from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable,AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import { AngularFireAuth }     from 'angularfire2/auth';
import * as firebase from 'firebase';
import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { SessionService } from './session.service'

@Injectable()
export class MessagingService {
  messaging = firebase.messaging();
  currentMessage = new BehaviorSubject(null)
  constructor(public service:SessionService,private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('user is logged in');

        // this.db.list('/fcmTokens').push(null);
        console.log("token====="+JSON.stringify(this.messaging.getToken()));
        
      } else {
        console.log('user not logged in');
      }
    });
    // alert("New Notify");
   }
  updateToken(token) {
    this.afAuth.authState.subscribe((user)=>{
      if (!user) return;
      const data = { [user.uid]: token }
      this.db.object('fcmTokens/').update(data).then(()=>{
        console.log("update success");
      }).catch((err:any)=>{
        console.log("update failed==="+err);
      });
      console.log("updating token in db....................................................");
    },error=>{
      console.log("Error in console");
    })
    console.log("Come in update token");
    // this.afAuth.authState.take(1).subscribe(user => {

    //   console.log("user==========="+user);
    //   if (!user) return;
    //   const data = { [user.uid]: token }
    //   // alert("token===="+data);
    //   console.log("updating token in db....................................................");
    //   console.log(data);
    //   // this.db.object('/fcmTokens').update(data);
    // })
  }
  getPermission() {
      this.messaging.requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        return this.messaging.getToken()
      })
      .then(token => {

        console.log("token fetchingggggg");
        console.log(token);
        this.service.setToken(token);
        this.updateToken(token)

        // this.db.object('/fcmTokens').update(token);
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
    }
    receiveMessage() {
      //  alert("Notify");
       this.messaging.onMessage((payload) => {
        alert("Heeeeeeeee");
        console.log("Message received. ", payload);
        this.currentMessage.next(payload)
      });
    }
}