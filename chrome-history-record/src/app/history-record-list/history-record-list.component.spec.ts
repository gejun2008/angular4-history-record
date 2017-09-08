import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRecordListComponent } from './history-record-list.component';

describe('HistoryRecordListComponent', () => {
  let component: HistoryRecordListComponent;
  let fixture: ComponentFixture<HistoryRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
