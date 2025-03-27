import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgreeBarComponent } from "../reusable/progree-bar/progree-bar.component";

@Component({
  selector: 'app-ng-class',
  imports: [NgClass, FormsModule, ProgreeBarComponent],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
  divBgcolor:string="bg-success"

  isChecked:boolean= false;

  addDiv1color(clas:string)
  {
      this.divBgcolor=clas
  }


 

}
