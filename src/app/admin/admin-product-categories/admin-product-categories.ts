import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {Router} from '@angular/router';
// import {FileUpload} from '../../fileupload';
import * as firebase from 'firebase';
@Component({
  selector: 'admin-product-categories',
  templateUrl: './admin-product-categories.html',
  styleUrls: ['./admin-product-categories.css']
})
export class ProductCategoriesComponent implements OnInit {
  categories: FirebaseListObservable<any[]>;
  constructor(public db: AngularFireDatabase,public router:Router){ 
    this.categories = db.list('/user_detail');
  }

  ngOnInit() {
  }

  addCategories()
  {
    this.router.navigateByUrl('/admin/saveUser');
  }

}
