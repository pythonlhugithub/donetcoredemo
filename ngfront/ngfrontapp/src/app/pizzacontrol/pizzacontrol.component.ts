import { Component, OnChanges, OnInit } from '@angular/core';
import { PzaServiceService } from '../pza-service.service';
import { Pizzamodel } from '../model/pizzamodel';
import { ControlContainer } from '@angular/forms';
 
@Component({
  selector: 'app-pizzacontrol',
  templateUrl: './pizzacontrol.component.html',
  styleUrls: ['./pizzacontrol.component.css']
})
export class PizzacontrolComponent implements OnInit , OnChanges{

 

  constructor(private paz:PzaServiceService ) {

   
   }

  ngOnInit(): void {
    //this.getallinctrl();
  }

  ngOnChanges(): void {
    console.log("on changes");
  }


getallinctrl(){
  //var allpza=this.paz.GetAllpzas().subscribe;

   


  console.log('allpza');
}

}
