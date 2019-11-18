import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ConstructionComponent } from './pages/construction/construction.component';

const routes: Routes = [
  { path: 'pages/login', component: LoginComponent },
  {
    path: 'construction',
    component: ConstructionComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
