import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  ListChats  :any [] = []; 

  chat : Chat ={
    name : 'test',
    message : ''
  };
  constructor(private ChatSrvc : ChatService) { }

  ngOnInit(): void {



    //puisque le retour de la methode getChats est un observable on utilise suscribe
    // a row function

    this.ChatSrvc.getChats().subscribe(chat => this.ListChats = chat);
    
  }

  CreateNewChat(){
    //on utilise then catch
    this.ChatSrvc.saveChat(this.chat).then(res=>{
        this.chat = {
          name : 'test',
          message : ''
        };
    });
  }

}
