import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent {
  @Input() displayedColumns: string[] = [];
  @Input() headerLabels: string[] = [];
  @Input() dataSource: any[] = [];
  @Input() editAction: boolean | undefined;
  @Input() deleteAction: boolean | undefined;
  @Input() readAction: boolean | undefined;

  @Output() editEmitter = new EventEmitter<any>();
  @Output() deleteEmitter = new EventEmitter<any>();
  @Output() readEmitter = new EventEmitter<any>();

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
}
