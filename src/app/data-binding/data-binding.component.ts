import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName:string="rahul";
  rollNo:Number=101;
  isActive:boolean=true;
  div1ClassName:string="bg-primary"
  currentDate:Date=new  Date()
   myPlaceholder:string="Enter your name "
   selectedCity:string="";

   
showWelcomeMessage()
{
  alert("welcome to angular 19")
}

oncityChange()
{
  alert("city changed")
}


}
