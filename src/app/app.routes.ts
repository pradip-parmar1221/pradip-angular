import { Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { AppComponent } from './app.component';
import { AddFormComponent } from './addform/addform.component';
import { listComponent } from './list/list.component';

export const routes: Routes = [
    { path: 'a', component: ChildComponent },
    { path: 'create', component: AddFormComponent },
    { path: 'list', component: listComponent },
  
];
