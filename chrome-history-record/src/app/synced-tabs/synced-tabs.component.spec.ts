import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncedTabsComponent } from './synced-tabs.component';

describe('SyncedTabsComponent', () => {
  let component: SyncedTabsComponent;
  let fixture: ComponentFixture<SyncedTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncedTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncedTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
