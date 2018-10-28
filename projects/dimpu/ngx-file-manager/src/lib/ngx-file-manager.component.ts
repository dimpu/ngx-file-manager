import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FileElement } from './file-element.interface';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UploadFileComponent } from './modals/upload-file/upload-file.component';
import { NgxFileManagerService } from './ngx-file-manager.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ngx-file-manager',
  templateUrl: './ngx-file-manager.component.html',
  styleUrls: [
    './ngx-file-manager.component.scss'
  ]
})
export class NgxFileManagerComponent {
  selectedElement = null;
  @Input() fileElements$: Observable<FileElement[]>;
  @Output() fileUploaded = new EventEmitter<FileElement>();
  @Output() fileSelected = new EventEmitter<FileElement>();

  constructor(
    public dialog: MatDialog,
    public fileManagerService: NgxFileManagerService) {}

  // @Output() folderAdded = new EventEmitter<{ name: string }>();
  // @Output() elementRenamed = new EventEmitter<FileElement>();
  // @Output() elementMoved = new EventEmitter<{ element: FileElement; moveTo: FileElement }>();
  // @Output() navigatedDown = new EventEmitter<FileElement>();
  // @Output() navigatedUp = new EventEmitter();

  @Input()
  set apiConfig(config) {
    this.fileManagerService.setApiConfig(config);
    this.fileElements$ = this.fileManagerService.getFilesList();
  }

  deleteElement(element: FileElement) {
    // this.elementRemoved.emit(element);
  }

  moveElement(element: FileElement, moveTo: FileElement) {
    // this.elementMoved.emit({ element: element, moveTo: moveTo });
  }

  openUploadFileDialog() {
    const dialogRef = this.dialog.open(UploadFileComponent);
    dialogRef.afterClosed().subscribe(res => {
      this.fileElements$ = this.fileManagerService.getFilesList();
      if (res) {
        this.fileUploaded.emit(res);
      }
    });
  }

  openMenu(event: MouseEvent, viewChild: MatMenuTrigger) {
    event.preventDefault();
    viewChild.openMenu();
  }

  isPhoto(el: FileElement) {
    return el.extension.toLocaleLowerCase().match(/.(jpg|jpeg|png|gif)$/i);
  }

  isFile(el: FileElement) {
    return !this.isPhoto(el);
  }

  onElementSelect(element) {
    this.selectedElement = element;
  }

  onSelect() {
    this.fileSelected.emit(this.selectedElement);
  }

}
