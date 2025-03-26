import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-getapi',
  imports: [],
  templateUrl: './getapi.component.html',
  styleUrl: './getapi.component.css'
})
export class GetapiComponent {

  userList:any[]=[];
  productList:any[]=[]


  constructor(private http: HttpClient) { 


  }

  getUsers()
  {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any)=>{
      this.userList=result;
      

    })
  }

  getProducts()
  {
    this.http.get('https://fake-store-api.mock.beeceptor.com/api/products').subscribe((result:any)=>{

      this.productList=result;
      console.log(this.productList);
    })
  }



}


//  this.http.get('https://jsonplaceholder.typicode.com/users')  this will return obserable and anything return obserable we have to do subscribe
