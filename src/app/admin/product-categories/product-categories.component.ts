import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {Router} from '@angular/router';
// import {FileUpload} from '../../fileupload';
import * as firebase from 'firebase';
@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {
  categories: FirebaseListObservable<any[]>;
  constructor(public db: AngularFireDatabase,public router:Router) {
    this.categories = db.list('/categories');
   }

  ngOnInit() {
  }


  addCategory()
  {
    this.router.navigateByUrl('/admin/addCategory');
  }

}
