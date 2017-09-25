import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainHistoryRecordLayoutComponent } from './main-history-record-layout/main-history-record-layout.component';
import { HistoryRecordSearchBarComponent } from './history-record-search-bar/history-record-search-bar.component';
import { HistoryRecordListComponent } from './history-record-list/history-record-list.component';
import { HistoryRecordItemComponent } from './history-record-item/history-record-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHistoryRecordLayoutComponent,
    HistoryRecordSearchBarComponent,
    HistoryRecordListComponent,
    HistoryRecordItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
