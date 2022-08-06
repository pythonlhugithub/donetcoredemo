import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { Pizzamodel } from '../model/pizzamodel';
import {HttpClient} from '@angular/common/http'
import {HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MemberService {

pza:any;

  constructor(public http: HttpClient) {
    
    this.GetAllPizza();
    console.log('Hello from member service');


   }

   GetAllPizza()
   {  
      return this.http.get('https://localhost:7187/pizza');
  
  } 
   
}
