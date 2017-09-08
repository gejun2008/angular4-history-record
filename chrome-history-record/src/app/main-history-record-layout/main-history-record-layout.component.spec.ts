import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHistoryRecordLayoutComponent } from './main-history-record-layout.component';

describe('MainHistoryRecordLayoutComponent', () => {
  let component: MainHistoryRecordLayoutComponent;
  let fixture: ComponentFixture<MainHistoryRecordLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHistoryRecordLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHistoryRecordLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
