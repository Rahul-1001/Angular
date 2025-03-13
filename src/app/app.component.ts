import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./product/product.component";
import { CategoryComponent } from "./category/category.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent, CategoryComponent],
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
 