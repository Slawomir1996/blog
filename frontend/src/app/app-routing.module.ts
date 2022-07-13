import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  //     {
  //       path: ':id',
  //       component: UserProfileComponent
  //     },
  //   ]
  // },
  // {
  //   path: 'update-profile',
  //   component: UpdateUserProfileComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'blog-entries/:id',
  //   component: ViewBlogEntryComponent
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: 'create-blog-entry',
  //   component: CreateBlogEntryComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
