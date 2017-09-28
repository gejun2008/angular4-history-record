import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HistoryRecordSearchBarComponent } from './history-record-search-bar/history-record-search-bar.component';
import { HistoryRecordListComponent } from './history-record-list/history-record-list.component';
import { HistoryRecordItemComponent } from './history-record-item/history-record-item.component';
import { SyncedTabsComponent } from './synced-tabs/synced-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryRecordSearchBarComponent,
    HistoryRecordListComponent,
    HistoryRecordItemComponent,
    SyncedTabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
