import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  imports: [NgFor],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {

    cityList:string[]=["delhi","bihar","mumbai","pune","bangalore","chennai","kolkata","hyderabad","ahmedabad","surat"];

     employeeArray:any[]=[
      {empId:121,name:'AAA',city:"pune",contactNo:"23564589"},
      {empId:122,name:'BBB',city:"mumbai",contactNo:"23564589"},
      {empId:123,name:'CCC',city:"delhi",contactNo:"23564589"},
      {empId:124,name:'DDD',city:"bangalore",contactNo:"23564589"},
      {empId:125,name:'EEE',city:"chennai",contactNo:"23564589"},
      {empId:126,name:'FFF',city:"kolkata",contactNo:"23564589"},
      
     ]
}
