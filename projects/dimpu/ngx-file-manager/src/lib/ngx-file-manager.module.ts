import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatMenuModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule,
  MatProgressBarModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxFileManagerComponent } from './ngx-file-manager.component';
import { NewFolderDialogComponent } from './modals/new-folder-dialog/new-folder-dialog.component';
import { RenameDialogComponent } from './modals/rename-dialog/rename-dialog.component';
import { SearchPipe } from './search.pipe';
import { UploadFileComponent } from './modals/upload-file/upload-file.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // Import angular material
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    MatProgressBarModule,
    FlexLayoutModule
  ],
  declarations: [NgxFileManagerComponent, NewFolderDialogComponent, RenameDialogComponent, SearchPipe, UploadFileComponent],
  exports: [NgxFileManagerComponent],
  entryComponents: [NewFolderDialogComponent, RenameDialogComponent, UploadFileComponent]
})
export class NgxFileManagerModule { }
