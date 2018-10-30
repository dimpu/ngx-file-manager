import { Component } from '@angular/core';
import { FileElement } from '@dimpu/ngx-file-manager';
import { MatDialog } from '@angular/material';
import { ExampleDialogComponent } from './modals/example-dialog/example-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apiConfig: any = {
    baseUrl: '/api/',
    listUrl: 'list',
    uploadUrl: 'upload'
  };

  constructor(
    public dialog: MatDialog,
  ) {

  }
  onFileUploaded(res) {
    console.log(res);
  }

  onFileSelected($event) {
    console.log($event);
  }

  onOpenDialog() {
    const dialogRef = this.dialog.open(ExampleDialogComponent);
    dialogRef.afterClosed().subscribe(res => {

    });
  }
}
