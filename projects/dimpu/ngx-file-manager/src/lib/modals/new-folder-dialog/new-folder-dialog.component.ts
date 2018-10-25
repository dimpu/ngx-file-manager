import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'new-folder-dialog',
  templateUrl: './new-folder-dialog.component.html',
  styleUrls: ['./new-folder-dialog.component.css']
})
export class NewFolderDialogComponent {
  constructor(public dialogRef: MatDialogRef<NewFolderDialogComponent>) {}

  folderName: string;

  // ngOnInit() {}
}
