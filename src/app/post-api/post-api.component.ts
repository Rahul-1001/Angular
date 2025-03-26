import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {
  carList:any[]=[];
  carObj:any={
      "carId": 0,
      "brand": "",
      "model": "",
      "year": "",
      "color": "",
      "dailyRate": "",
      "carImage": "",
      "regNo": ""
  }

  constructor(private http:HttpClient)
  {
  
  }

  getAllCar()
  {
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((result:any)=>{



      this.carList=result.data;
    })
  }

  onSaveCar()
  {
    // post api need url and body
    this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar",this.carObj).subscribe((result:any)=>{

      if(result.result)
      {

        alert("car created successfuly")
        this.getAllCar();
      }
      else{
        alert(result.message)
      }
    })
  }


updateCar()
{
  this.http.put("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar",this.carObj).subscribe((result:any)=>{
     
            
      if(result.result)
        {
  
          alert("car updated successfuly")
          this.getAllCar();
        }
        else{
          alert(result.message)
        }
  })
}


  onEdit( data:any)
  {
     this.carObj=data;
  }

}
