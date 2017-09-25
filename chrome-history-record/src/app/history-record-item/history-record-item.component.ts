import { Component, OnInit, Input } from '@angular/core';
import { HistoryRecordItem } from '../view-model/history-record-item';

@Component({
  selector: 'app-history-record-item',
  templateUrl: './history-record-item.component.html',
  styleUrls: ['./history-record-item.component.css']
})
export class HistoryRecordItemComponent implements OnInit {
  @Input() itemData:any;

  model:HistoryRecordItem;

  constructor() { }

  ngOnInit() {
    this.handleItemData(this.itemData);
  }

  handleItemData(itemData){
    this.model = this.itemData;
  }
}
