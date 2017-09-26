import { Component, OnInit } from '@angular/core';

import {HistoryRecordSearchBar} from '../view-model/history-record-search.model';
@Component({
  selector: 'app-history-record-search-bar',
  templateUrl: './history-record-search-bar.component.html',
  styleUrls: ['./history-record-search-bar.component.css']
})
export class HistoryRecordSearchBarComponent implements OnInit {
  searchBarViewModel:HistoryRecordSearchBar = {
    searchTitle:"历史记录",
    searchName:""
  };

  searchClearBtnShow:boolean = false;
  noSearchingProcess:boolean = true;
  noselectItem:boolean = true;

  constructor() {   }

  ngOnInit() {
    
  }

  searchInput(name){
    if(name){
      this.searchClearBtnShow = true;
      this.noSearchingProcess = false;
      setTimeout(()=>{
        this.noSearchingProcess =  true;
      }, 3000)
    }
    else{
      this.searchClearBtnShow = false;
    }
  }

  /**
   * clear searching state
   */
  clearInputSearch(){
    this.searchBarViewModel.searchName = '';
    this.searchClearBtnShow = false;
    this.noSearchingProcess =  true;
  }
}
