import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';
@Component({
  selector: 'app-product-category-insert',
  templateUrl: './product-category-insert.component.html',
  styleUrls: ['./product-category-insert.component.css']
})
export class ProductCategoryInsertComponent implements OnInit {
  category:any={};
  constructor(public router:Router,public route:ActivatedRoute,public db:AngularFireDatabase) { }

  ngOnInit() {
  }


  goBackCategories()
  {
     this.router.navigate(['/admin/categories']);
  }




  saveCategory()
  {

    this.insertCategory();
  }
  insertCategory()
  {
    this.db.list('/categories').push(this.category).then(({key}) => {
        console.log('all good');
        this.category.key=key;
        this.updateKey(this.category)
      }, reject => {
        alert("Please try again");
        console.log('error');
      })
  }

  updateKey(category)
  {
      this.db.object('/categories/'+category.key).update(category).then((category: any) => {
          // return new Response('Profile has been saved successfully');

            this.goBackCategories();
            console.log("Successfully updated Categories====")
          //  this.showToast("Successfully updated location====");
        })
      .catch((err: any) => {
          // this.goBackUser();
          this.updateKey(this.category);
          // return new Response('Unable to save profile at this time, please try again later.');
          var error="error=="+err;
          // this.showToast(error);
      });
  }

}
