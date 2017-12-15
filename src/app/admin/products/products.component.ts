import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {Router} from '@angular/router';
// import {FileUpload} from '../../fileupload';
import * as firebase from 'firebase';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: FirebaseListObservable<any[]>;
  constructor(public db: AngularFireDatabase,public router:Router) {
    this.products = db.list('/products');
   }

  ngOnInit() {
  }


  addProducts()
  {
    this.router.navigateByUrl('/admin/addProducts');
  }

  removeProduct(product)
  {
    
    this.verifyProductAvailability(product);
  }



  disbaleProduct(product)
  {
      product.status=false;
      this.db.object('/products/'+product.key).update(product).then((profile: any) => {
        // return new Response('Profile has been saved successfully');
          console.log("Successfully updated====")
        //  this.showToast("Successfully updated location====");
      })
    .catch((err: any) => {
        // this.goBackUser();
        // return new Response('Unable to save profile at this time, please try again later.');
        var error="error=="+err;
        // this.showToast(error);
    });
  }

  verifyProductAvailability(product)
  {
    var first=true;
    var item=this.db.list('/orders',{
      query:{
        orderByChild:'productId',
        equalTo:product.key,
        
      },
    }).subscribe(snapshot => {
        if(snapshot.length>0)
        {
          alert("You cannot remove the product as it is in orders");
        }
        else
        {
          this.disbaleProduct(product);
        }
    },error=>{
      return;
    })     
  }
}
