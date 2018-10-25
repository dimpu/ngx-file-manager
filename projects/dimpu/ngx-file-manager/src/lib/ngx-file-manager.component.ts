import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FileElement } from './file-element.interface';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NewFolderDialogComponent } from './modals/new-folder-dialog/new-folder-dialog.component';
import { RenameDialogComponent } from './modals/rename-dialog/rename-dialog.component';
import { UploadFileComponent } from './modals/upload-file/upload-file.component';


@Component({
  selector: 'ngx-file-manager',
  templateUrl: './ngx-file-manager.component.html',
  styleUrls: [
    './ngx-file-manager.component.scss'
  ]
})
export class NgxFileManagerComponent {
  constructor(public dialog: MatDialog) {}

  @Input() fileElements: FileElement[] = [];
  @Input() canNavigateUp: string;
  @Input() path: string;

  @Output() folderAdded = new EventEmitter<{ name: string }>();
  @Output() elementRemoved = new EventEmitter<FileElement>();
  @Output() elementRenamed = new EventEmitter<FileElement>();
  @Output() elementMoved = new EventEmitter<{ element: FileElement; moveTo: FileElement }>();
  @Output() navigatedDown = new EventEmitter<FileElement>();
  @Output() navigatedUp = new EventEmitter();

  deleteElement(element: FileElement) {
    this.elementRemoved.emit(element);
  }

  navigate(element: FileElement) {
    if (element.isFolder) {
      this.navigatedDown.emit(element);
    }
  }

  navigateUp() {
    this.navigatedUp.emit();
  }

  moveElement(element: FileElement, moveTo: FileElement) {
    this.elementMoved.emit({ element: element, moveTo: moveTo });
  }

  openNewFolderDialog() {
    const dialogRef = this.dialog.open(UploadFileComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.folderAdded.emit({ name: res });
      }
    });
  }

  openRenameDialog(element: FileElement) {
    const dialogRef = this.dialog.open(RenameDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        element.name = res;
        this.elementRenamed.emit(element);
      }
    });
  }

  openMenu(event: MouseEvent, viewChild: MatMenuTrigger) {
    event.preventDefault();
    viewChild.openMenu();
  }

  isPhoto(el: FileElement) {
    return el.extension === 'jpg';
  }

  isFile(el: FileElement) {
    return !this.isPhoto(el);
  }

  onSearch(query) { console.log(query);
    this.fileElements = this.fileElements.map((el) => {
      if (el.name.toLowerCase().includes(query.toLowerCase())) {
        el.hidden = false;
      } else {
        el.hidden = true;
      }
      return el;
    });
  }

}


