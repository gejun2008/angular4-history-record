import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRecordItemComponent } from './history-record-item.component';

describe('HistoryRecordItemComponent', () => {
  let component: HistoryRecordItemComponent;
  let fixture: ComponentFixture<HistoryRecordItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryRecordItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRecordItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
