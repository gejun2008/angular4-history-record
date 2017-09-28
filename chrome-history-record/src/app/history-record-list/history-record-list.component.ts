import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-record-list',
  templateUrl: './history-record-list.component.html',
  styleUrls: ['./history-record-list.component.css']
})
export class HistoryRecordListComponent implements OnInit {
  listItems:any;

  constructor() { }

  ngOnInit() {
    const mockData = [
      {
        date:'2017/9/25',
        websites:[{
          time:"11:28",
          icon:"assets/images/favicon.ico",
          name:"favicon.ico (32×32)",
          site:"https://assets-cdn.github.com/favicon.ico",
          domain:"assets-cdn.github.com"
        },
        {
          time:"13:12",
          icon:"assets/images/favicon.ico",
          name:"favicon.ico (32×32)",
          site:"https://assets-cdn.github.com/favicon.ico",
          domain:"assets-cdn.github.com"
        },
        {
          time:"13:08",
          icon:"assets/images/favicon.ico",
          name:"favicon.ico (32×32)",
          site:"https://assets-cdn.github.com/favicon.ico",
          domain:"assets-cdn.github.com"
        },
        {
          time:"13:24",
          icon:"assets/images/favicon.ico",
          name:"favicon.ico (32×32)",
          site:"https://assets-cdn.github.com/favicon.ico",
          domain:"assets-cdn.github.com"
        }
      ]
      },
      {
        date:'2017/9/24',
        websites:[{
          time:"8:09",
          icon:"assets/images/favicon.ico",
          name:"angular4-history-record/chrome-history-record at master · gejun2008/angular4-history-record",
          site:"https://github.com/gejun2008/angular4-history-record/tree/master/chrome-history-record",
          domain:"github.com"
        },
        {
          time:"19:34",
          icon:"assets/images/favicon.ico",
          name:"angular4-history-record/chrome-history-record at master · gejun2008/angular4-history-record",
          site:"https://github.com/gejun2008/angular4-history-record/tree/master/chrome-history-record",
          domain:"github.com"
        },
        {
          time:"16:08",
          icon:"assets/images/favicon.ico",
          name:"angular4-history-record/chrome-history-record at master · gejun2008/angular4-history-record",
          site:"https://github.com/gejun2008/angular4-history-record/tree/master/chrome-history-record",
          domain:"github.com"
        },
        {
          time:"13:24",
          icon:"assets/images/favicon.ico",
          name:"angular4-history-record/chrome-history-record at master · gejun2008/angular4-history-record",
          site:"https://github.com/gejun2008/angular4-history-record/tree/master/chrome-history-record",
          domain:"github.com"
        }
      ]
      },
      {
        date:'2017/9/29',
        websites:[{
          time:"18:09",
          icon:"assets/images/favicon.ico",
          name:"favicon.ico (32×32)",
          site:"https://assets-cdn.github.com/favicon.ico",
          domain:"assets-cdn.github.com"
        },
        {
          time:"19:34",
          icon:"assets/images/favicon.ico",
          name:"favicon.ico (32×32)",
          site:"https://assets-cdn.github.com/favicon.ico",
          domain:"assets-cdn.github.com"
        },
        {
          time:"19:08",
          icon:"assets/images/favicon.ico",
          name:"favicon.ico (32×32)",
          site:"https://assets-cdn.github.com/favicon.ico",
          domain:"assets-cdn.github.com"
        },
        {
          time:"23:24",
          icon:"assets/images/favicon.ico",
          name:"favicon.ico (32×32)",
          site:"https://assets-cdn.github.com/favicon.ico",
          domain:"assets-cdn.github.com"
        }
      ]
      }
    ]

    this.listItems = mockData;
  }

}
