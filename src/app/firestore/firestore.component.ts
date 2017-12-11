import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
export interface Todo {
  description: string;
  completed: boolean;
}
@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.css']
})
export class FirestoreComponent implements OnInit {
  todoCollectionRef: AngularFirestoreCollection<Todo>;
  todo$: Observable<Todo[]>;  
  user:any={};
  constructor(public afs: AngularFirestore) { }

  ngOnInit() {
    this.todoCollectionRef = this.afs.collection('todos'); // a ref to the todos collection
    this.todo$ = this.todoCollectionRef.valueChanges();
    
    this.todo$ = this.todoCollectionRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Todo;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  addTodo(todoDesc: string) {
    if (todoDesc && todoDesc.trim().length) {
      this.todoCollectionRef.add({ description: todoDesc, completed: false });
    }
  }  
  updateTodo(todo) {
    this.todoCollectionRef.doc(todo.id).update({ completed: !todo.completed });
  }
  
  deleteTodo(todo) {
    this.todoCollectionRef.doc(todo.id).delete();
  }

  
  

}
