import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, orderBy, query, doc, setDoc } from '@angular/fire/firestore'; 
import { Observable } from 'rxjs';

interface Service{
  id: number;
  name: string;
  area: string;
  client: string;
  duration: string;
  active: boolean;
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})



export class PostsService {
  firestore: Firestore = inject(Firestore)

  constructor() {
  }

  getPosts(): Observable<any[]>{ 
    const itemCollection = collection(this.firestore, "Services");
    const orderedQuery = query(itemCollection, orderBy("id", "asc"));    

    return collectionData(orderedQuery) as Observable<Service[]>; // Convierte en un Observable
    //return this.firestore.collectionGroup("Services").valueChanges();
  }

  addPost(post: any){
    console.log("HOLA")
    console.log(post.id)

    const colRef = collection(this.firestore, "Services");
    const docRef = doc(colRef, post.id.toString());

    setDoc(docRef, post);

    
   // return this.firestore.collection("Services").add(post);
  }

}
