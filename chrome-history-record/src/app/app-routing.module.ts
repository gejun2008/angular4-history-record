import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

import { AppComponent } from './app.component';
import { HistoryRecordSearchBarComponent } from './history-record-search-bar/history-record-search-bar.component';
import { HistoryRecordListComponent } from './history-record-list/history-record-list.component';
import { SyncedTabsComponent } from './synced-tabs/synced-tabs.component';

const routs:Routes = [
  { path:'',redirectTo:'/history', pathMatch:"full"},
  { path:'history',component:HistoryRecordListComponent},
  { path:'history/syncedTabs',component:SyncedTabsComponent},
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routs)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
