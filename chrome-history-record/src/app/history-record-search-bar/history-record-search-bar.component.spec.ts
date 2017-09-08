import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRecordSearchBarComponent } from './history-record-search-bar.component';

describe('HistoryRecordSearchBarComponent', () => {
  let component: HistoryRecordSearchBarComponent;
  let fixture: ComponentFixture<HistoryRecordSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryRecordSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRecordSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
