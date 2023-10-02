import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {

  @Input() displayedColumns: string[] = [];
  @Input() headerLabels: string[] = [];
  @Input() dataSource: any[] = [];

  editItem(element: any) {
    console.log(`${element.nodeName} is clicked!!`);
  }

  constructor(public dialog: MatDialog) {}

  editDialog(element: any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '70%',
      height: 'auto',
      data: { ...element },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Updated element:', result);
      }
    });
  }
}
