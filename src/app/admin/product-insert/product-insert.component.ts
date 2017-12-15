import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';
// var randomstring = require("randomstring");
import {FileUpload} from '../fileupload';
import {SessionService} from '../../session.service';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})
export class ProductInsertComponent implements OnInit {

  categories: FirebaseListObservable<any[]>;  
  params:any;
  product:any={};
  image:any;
  newImage:any;
  selectedFiles:any;
  currentFileUpload:any;
  userInfoUpdated:any;
  progress: {percentage: number} = {percentage: 0}
  constructor(public service:SessionService,public router:Router,public route:ActivatedRoute,public db:AngularFireDatabase) { 

    this.categories = db.list('/categories');

  }

  
  ngOnInit() {
  }
  goBackProducts()
  {
     this.router.navigate(['/admin/products']);
  }

  selectFile(event) {
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

  // saveProduct()
  // {
  //   alert(JSON.stringify(this.product));
  // }
  saveProduct()
  {


    
    
    if(!this.product.name)
    {
      alert("Please enter product name");
      return;
    }

    if(!this.product.categoryId)
    {
      alert("Please Choose Category");
      return;
    }

    if(!this.product.quantity)
    {
      alert("Please enter quantity");
      return;
    }

    if(!this.product.price)
    {
      alert("Please enter price");
      return;
    }

    if(!this.currentFileUpload)
    {
      alert("Please Choose File");
      return;
    }

    if(this.currentFileUpload)
    {
      this.imageUpload();
    }
    else
    {
      this.insertProduct();
    }
    
  }
  insertProduct()
  {
    this.db.list('/products').push(this.product).then(({key}) => {
        this.product.key=key;
        this.updateKey(this.product)
      }, reject => {
        alert("Please try again");
        console.log('error');
      })
  }


  
  
  updateKey(product)
  {
      product.status=true;
      this.db.object('/products/'+product.key).update(product).then((profile: any) => {
          // return new Response('Profile has been saved successfully');

            this.goBackProducts();
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


  onChange(name:string)
  {
    alert("order name==="+name);
  }
  imageUpload()
  {
      const storageRef = firebase.storage().ref()
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
          this.product.imageUrl = uploadTask.snapshot.downloadURL;
          this.product.fileName = filename;
          this.insertProduct();
        }
      );
    }  
  }



