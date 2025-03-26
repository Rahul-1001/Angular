import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,
AfterContentChecked,OnDestroy {

  constructor()
  {
    console.log("constructor")
  }
  ngOnInit(): void {
    // when the component got initialize 
    //for api call function
    console.log("ngonit")
  }
  ngAfterContentInit(): void {
    //if in the component we are using pdf or image or something this will get trigger 
    console.log("aftercontactinit")
  }
  ngAfterContentChecked(): void {
    // when all the external component loaded 
    console.log("ngaftercontentchecked")
    
  }
  ngAfterViewInit(): void {
    //all view successfully initialize 
    //viewchild getting reference of element
    console.log("ngafterviewinit")
  }
  ngAfterViewChecked(): void {
    //all the view properly initialized and checked
    console.log("afterviewchecked")
  }


ngOnDestroy(): void {
  alert("you are leaving page")
  //when we redirect one component to another 
  console.log("ngondestroy")
}

}
