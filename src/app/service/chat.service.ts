import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import { Chat } from '../models/chat';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private  afs : AngularFirestore) { }


  getChats(){

    // pour recuperer un observable on utlise valueChanges:
    //return est obligatoire 

    return this.afs.collection('Chats').valueChanges();
  }

  saveChat(chat:Chat){
    //return promise
    return this.afs.collection('Chats').add(chat);
  }
}
