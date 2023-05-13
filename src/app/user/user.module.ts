import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../@shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AuthInterceptor } from '../@core/interceptors/auth.interceptor';
import { AddUserComponent } from './add-user/add-user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PrimeNgModule } from '../prime-ng.module';
import { ViewMyProfileComponent } from './view-my-profile/view-my-profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    UserRoutingModule,
    PrimeNgModule
  ],
  declarations: [
    ManageUsersComponent,
    UserComponent,
    AddUserComponent,
    ViewMyProfileComponent,
    ChangePasswordComponent,
    EditUserComponent
  ]
})
export class UserModule { }
