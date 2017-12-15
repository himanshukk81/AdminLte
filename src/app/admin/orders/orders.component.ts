import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {Router} from '@angular/router';
// import {FileUpload} from '../../fileupload';
import * as firebase from 'firebase';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: FirebaseListObservable<any[]>;
  constructor(public db:AngularFireDatabase){ 
    this.orders = db.list('/orders');
  }

  ngOnInit() {
  }

  rejectOrder(order)
  {
      order.status="R";
      this.db.object('/orders/'+order.id).update(order).then((profile: any)=>{

          console.log("Successfully updated====");
      })
    .catch((err: any)=>{

    });
  }

  confirmOrder(order)
  {
    order.status="A";
    this.db.object('/orders/'+order.id).update(order).then((profile: any)=>{

        console.log("Successfully updated====");
    })
    .catch((err: any)=>{

    });
  }

}
