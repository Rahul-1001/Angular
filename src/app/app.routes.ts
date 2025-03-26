import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';

export const routes: Routes = [
    {
        path:'',
        component:DataBindingComponent,
        pathMatch:'full'
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
];
