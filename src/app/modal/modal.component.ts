import { Component, Inject, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public element: any
  ) {
    if (element != null) {
      this.nodeForm.setValue(element);
    }
  }

  nodeForm = new FormGroup({
    nodeId: new FormControl(),
    nodeName: new FormControl(),
    vendor: new FormControl(),
    systemName: new FormControl(),
    location: new FormControl(),
    capacity: new FormControl(),
  });

  handleNode() {
    console.log(this.nodeForm.value);
    this.dialogRef.close(this.element);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.element);
  }
}
