import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; 
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { NgifComponent } from "./ngif/ngif.component";
import { NgforComponent } from "./ngfor/ngfor.component";
import { NgClassComponent } from "./ng-class/ng-class.component";
import { TemplateFormComponent } from "./template-form/template-form.component";
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GetapiComponent } from "./getapi/getapi.component";
import { PostApiComponent } from "./post-api/post-api.component";
import { CustomerComponent } from "./customer/customer.component";
import { ProgreeBarComponent } from "./reusable/progree-bar/progree-bar.component";
import { CrewComponent } from "./crew/crew.component";
import { CrewDesginationComponent } from "./crew-desgination/crew-desgination.component";
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  imports: [DataBindingComponent, NgifComponent, NgforComponent, NgClassComponent, RouterModule, TemplateFormComponent, ReactiveFormComponent, GetapiComponent, PostApiComponent, CustomerComponent, ProgreeBarComponent, CrewComponent, CrewDesginationComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp';
  name="rahul"
  age="21"
  company="thorabh"
  imageurl="https://wallpapers.com/images/featured/thor-qzytdg8xliuaelun.jpg"
  inpType="password"

  printData()
  {
    console.log("hello ")
  }

isAvailable=true





}
 