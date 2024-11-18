import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, orderBy, query, doc, setDoc } from '@angular/fire/firestore'; 
import { Observable } from 'rxjs';
import { BusService } from '../shared/models/data-bus';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  firestore: Firestore = inject(Firestore)

  constructor() {}

  getPosts(): Observable<any[]>{ 
    const itemCollection = collection(this.firestore, "Services");
    const orderedQuery = query(itemCollection, orderBy("id", "asc"));    

    return collectionData(orderedQuery) as Observable<BusService[]>;
    //return this.firestore.collectionGroup("Services").valueChanges(); -> Deprecated
  }

  addPost(post: any){
    console.log("HOLA")
    console.log(post.id)

    const colRef = collection(this.firestore, "Services");
    const docRef = doc(colRef, post.id.toString());

    setDoc(docRef, post);// -> addDoc no sobreescriu. setDoc sí ho fa

   // return this.firestore.collection("Services").add(post); -> Deprecated
  }

}
