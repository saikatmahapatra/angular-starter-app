import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PostComponent } from './post/post.component';
import { DashboardStatComponent } from './dashboard-stat/dashboard-stat.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../@shared/shared.module';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PrimeNgModule } from '../prime-ng.module';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    DashboardComponent,
    PostComponent,
  DashboardStatComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    DashboardRoutingModule,
    PrimeNgModule,
    FullCalendarModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
