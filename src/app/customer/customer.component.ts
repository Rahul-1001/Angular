import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../service/customer.service';


@Component({
  selector: 'app-customer',
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customerObj:any={
    
      "customerId": 0,
      "customerName": "",
      "customerCity": "",
      "mobileNo": "",
      "email": ""
    
  }


customerArray:any[]=[];

constructor(private custsrv:CustomerService)
{
  this.getCustomers();
} 

  // getCustomers()
  // {
  //    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers").subscribe((res:any)=>{
  //       this.customerArray=res.data;
  //    })
  // }



  getCustomers(){
  this.custsrv.loadCustomers().subscribe((res:any)=>{
    this.customerArray=res.data;
  })
  }  


}
