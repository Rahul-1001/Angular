import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,NgIf],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  userObj:any={
    firstName:"",
    lastName:"",
    userName:"",
    city:"",
    state:"Goa",
    zipCode:"",
    isTermsAggree:false,
    email:""
  }

  onSave()
  {
    const formValue=this.userObj;
    console.log(formValue);
    alert("Form Submitted Successfully");
  }



}
