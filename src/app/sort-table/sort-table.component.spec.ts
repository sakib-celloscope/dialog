import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortTableComponent } from './sort-table.component';

describe('SortTableComponent', () => {
  let component: SortTableComponent;
  let fixture: ComponentFixture<SortTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortTableComponent]
    });
    fixture = TestBed.createComponent(SortTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
