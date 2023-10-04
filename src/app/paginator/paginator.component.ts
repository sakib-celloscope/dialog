import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface HeaderLabel {
  header: string;
  sort: boolean;
}


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() displayedColumns: string[] = [];
  @Input() headerLabels: HeaderLabel[] = [];
  @Input() tableData: any[] = [];

  @Input() editAction: boolean | undefined;
  @Input() deleteAction: boolean | undefined;
  @Input() readAction: boolean | undefined;

  @Input() sort: boolean | undefined;

  @Input() paginator: boolean | undefined;
  @Input() pageSize: number = 5;
  @Input() pageSizeOptions: number[] = [5, 10, 20, 50];
  @Input() dataLength: number = 0;

  @Output() editEmitter = new EventEmitter<any>();
  @Output() deleteEmitter = new EventEmitter<any>();
  @Output() readEmitter = new EventEmitter<any>();

  @Output() sortEmitter = new EventEmitter<any>();

  @Output() paginatorEmitter = new EventEmitter<any>();

  dataSource = new MatTableDataSource<any>();

  /* ---------------PAGINATOR STARTS HERE--------------- */
  @ViewChild(MatPaginator) paginate!: MatPaginator;

  // Handle page change event
  performPaginatorEmitter(event: PageEvent): void {
    this.paginatorEmitter.emit(event);
  }

  /* ---------------PAGINATOR ENDS HERE--------------- */

  ngOnInit() {
    // Set the initial data source
    this.dataSource.data = this.tableData;

    // PAGINATOR
    this.dataSource.paginator = this.paginate;
  }

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
