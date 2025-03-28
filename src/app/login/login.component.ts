import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj:any={
    userName:'',
    password:''
  }



  router=inject(Router)

  http=inject(HttpClient)
  onLogin()

  //static code
  // {
  //   if(this.userObj.userName=='admin' && this.userObj.password=='1234'){

  //     alert('login success ')
  //     this.router.navigateByUrl('ng-for')
  //   }
  //   else{
  //     alert('wrong credential')
  //   }
  //   }

{
  
  this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",this.userObj).subscribe((res:any)=>{

    if(res.result)
    {
        alert('login success ')
 

    }
    else{
      alert("credential fail")
    }

    
  })
}





}
