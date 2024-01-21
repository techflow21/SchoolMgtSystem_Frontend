import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SalesComponent } from './dashboard-components/sales/sales.component';
import { ActivityComponent } from './dashboard-components/activity/activity.component';
import { CardsComponent } from './dashboard-components/cards/cards.component';
import { StudentComponent } from './dashboard-components/student/student.component';
import { MaterialModule } from 'src/app/material-module';
import { AnalyticCardsComponent } from './dashboard-components/analytic-cards/analytic-cards.component';
import { CardStatsComponent } from './dashboard-components/card-stats/card-stats.component';
import { ChartsComponent } from './dashboard-components/charts/charts.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SalesComponent,
    ActivityComponent,
    StudentComponent,
    CardsComponent,
    AnalyticCardsComponent,
    CardStatsComponent,
    ChartsComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, NgApexchartsModule],
  exports: [
    DashboardComponent,
    SalesComponent,
    ActivityComponent,
    StudentComponent,
  ],
})
export class DashboardModule {}
