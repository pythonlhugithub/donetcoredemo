import { Component } from '@angular/core';
import {MemberService} from './services/member.service'; 
 import { PzaServiceService } from './pza-service.service';
import { Pizzamodel } from './model/pizzamodel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 

   constructor(private memberserv : MemberService, private paz:PzaServiceService) {
     
    // this.memberserv.GetAllMembers().subscribe((members) => {  
    //   members = this.members;  
    // }); 
    this.gethttppza();
   
   }

  title = 'ngfrontapp';

 gethttppza():void{

 this.memberserv.GetAllPizza().subscribe(rsp=>console.log(rsp));
 
 }
}



//pythonlhugithub/aspnetrestapi    ---backend web api for ngfront end
