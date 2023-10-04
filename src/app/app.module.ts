import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { NodeListComponent } from './node-list/node-list.component';
import { TableComponent } from './table/table.component';
import { CustomTableComponent } from './custom-table/custom-table.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SortTableComponent } from './sort-table/sort-table.component';
import { MatSortModule } from '@angular/material/sort';
import { CustomSortComponent } from './custom-sort/custom-sort.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    LoginComponent,
    NodeListComponent,
    TableComponent,
    CustomTableComponent,
    SortTableComponent,
    CustomSortComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,

    MatFormFieldModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
