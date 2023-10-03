import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-custom-sort',
  templateUrl: './custom-sort.component.html',
  styleUrls: ['./custom-sort.component.scss'],
})
export class CustomSortComponent {
  @Input() displayedColumns: string[] = [];
  @Input() headerLabels: string[] = [];
  @Input() dataSource: any[] = [];
  @Input() editAction: boolean | undefined;
  @Input() deleteAction: boolean | undefined;
  @Input() readAction: boolean | undefined;
  @Input() sort: boolean | undefined;

  @Output() editEmitter = new EventEmitter<any>();
  @Output() deleteEmitter = new EventEmitter<any>();
  @Output() readEmitter = new EventEmitter<any>();

  @Output() sortEmitter = new EventEmitter<any>();

  performEditEmitter(element: any) {
    if (this.editAction) {
      this.editEmitter.emit(element);
    }
  }

  performDeleteEmitter(element: any) {
    if (this.deleteAction) {
      this.deleteEmitter.emit(element);
    }
  }

  performReadEmitter(element: any) {
    if (this.readAction) {
      this.readEmitter.emit(element);
    }
  }

  performSortEmitter(sortState: Sort) {
    if (this.sort) {
      this.sortEmitter.emit(sortState);
    }
  }
}
