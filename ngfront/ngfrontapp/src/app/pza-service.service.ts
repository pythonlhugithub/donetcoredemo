import { Injectable } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'

//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PzaServiceService {

  constructor(public http: HttpClient) 
  {
    console.log('Hello from service')  
   }

   GetAllpzas()
   {  
    //return this.http.get('http://localhost:7187/get');
  }  
}
