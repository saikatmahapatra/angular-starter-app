import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminGuard } from '../@core/guards/admin.guard';
import { ViewMyProfileComponent } from './view-my-profile/view-my-profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: '', component: ViewMyProfileComponent },
      { path: 'my-profile', component: ViewMyProfileComponent },
      { path: 'edit/:id', component: EditUserComponent, canActivate: [AdminGuard] },
      { path: 'add', canActivate: [AdminGuard], component: AddUserComponent },
      { path: 'manage', canActivate: [AdminGuard], component: ManageUsersComponent },
      { path: 'edit/:id', canActivate: [AdminGuard], component: ManageUsersComponent },
      { path: 'change-password', component: ChangePasswordComponent }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class UserRoutingModule { }
