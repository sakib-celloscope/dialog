import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NodeListComponent } from './node-list/node-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'node-list', component: NodeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
