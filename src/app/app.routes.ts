import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
      path:'',
      redirectTo:"login",
      pathMatch:'full'
    },
    {
       path:'login',
       component:LoginComponent
    },

    {
        path:'',
        component:LayoutComponent,
        children:[

            {
                path:'',
                component:DataBindingComponent,
               
            },
        
            {
                path:'data-binding',
                component:DataBindingComponent
            },
            {
                path:'ngfor',
                component:NgforComponent
            },
            {
                path:'ngif',
                component:NgifComponent
            }
          

        ]
    },
   
];
