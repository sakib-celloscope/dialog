import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.scss'],
})
export class NodeListComponent {
  displayedColumns: string[] = [
    'no',
    'nodeId',
    'nodeName',
    'vendor',
    'systemName',
    'location',
    'capacity',
    'actions',
  ];
  tableData = [
    {
      nodeId: 'CAT-DHK-001',
      nodeName: 'Dhaka Cataleya',
      vendor: 'Cataleya',
      systemName: 'Cataleya',
      location: 'Dhaka',
      capacity: 20000,
    },
    {
      nodeId: 'CAT-CTG-002',
      nodeName: 'Chattogram Cataleya',
      vendor: 'Cataleya',
      systemName: 'Cataleya',
      location: 'Chattogram',
      capacity: 20000,
    },
    {
      nodeId: 'CAT-SYL-003',
      nodeName: 'Sylhet Cataleya',
      vendor: 'Cataleya',
      systemName: 'Cataleya',
      location: 'Sylhet',
      capacity: 20000,
    },
    {
      nodeId: 'CAT-DHK-001',
      nodeName: 'Dhaka Cataleya',
      vendor: 'Cataleya',
      systemName: 'Cataleya',
      location: 'Dhaka',
      capacity: 20000,
    },
    {
      nodeId: 'CAT-CTG-002',
      nodeName: 'Chattogram Cataleya',
      vendor: 'Cataleya',
      systemName: 'Cataleya',
      location: 'Chattogram',
      capacity: 20000,
    },
    {
      nodeId: 'CAT-SYL-003',
      nodeName: 'Sylhet Cataleya',
      vendor: 'Cataleya',
      systemName: 'Cataleya',
      location: 'Sylhet',
      capacity: 20000,
    },
  ];

  headerLabels = [
    {
      header: 'No',
      sort: true,
    },
    {
      header: 'Node ID',
      sort: true,
    },
    {
      header: 'Node Name',
      sort: true,
    },
    {
      header: 'Vendor',
      sort: true,
    },
    {
      header: 'System Name',
      sort: false,
    },
    {
      header: 'Location',
      sort: false,
    },
    {
      header: 'Capacity',
      sort: false,
    },
    {
      header: 'Actions',
      sort: false,
    },
  ];

  // DECLARING VARIABLES
  sortOrder = { active: '', direction: '' };

  limit = 10;
  offset = 0;

  constructor(public dialog: MatDialog) {}

  // Dialog Opening
  openDialog = (element: any): void => {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '70%',
      height: 'auto',
      data: { ...element },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Updated element:', result);
      }
    });
  };

  // Edit Node
  editNode(element: any) {
    console.log('In Node List Component!.', element);
    this.openDialog(element);
  }

  deleteNode(element: any) {
    console.log('Delete e click korse.');
  }

  // Open Dialog to Add Node
  addNode() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '70%',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Updated element:', result);
      }
    });
  }

  handleSort(sort: any) {
    this.sortOrder = { ...sort };
    console.log('From Node List Component:', this.sortOrder);
  }

  // Handling Pagination
  handlePagination(pagination: any) {
    this.limit = pagination.pageSize;

    this.offset = pagination.pageIndex * pagination.pageSize;

    console.log({
      offset: this.offset,
      limit: this.limit,
    });
  }
}
