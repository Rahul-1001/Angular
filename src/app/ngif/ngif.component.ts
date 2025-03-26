import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Route } from '@angular/router';

@Component({
  selector: 'app-ngif',
  imports: [NgIf,FormsModule,RouterLink,],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {
  // if we assign true then true will be visible
  div1visible:boolean=true;

  number1:string=""
  number2:string=""

  hidediv1()
  {
      this.div1visible=false;
  }

  showdiv1()
  {
      this.div1visible=true;
  }

}
