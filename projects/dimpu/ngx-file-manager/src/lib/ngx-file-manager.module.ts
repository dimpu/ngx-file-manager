import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatMenuModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule,
  MatProgressBarModule,
  MatButtonModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxFileManagerComponent } from './ngx-file-manager.component';
import { SearchPipe } from './search.pipe';
import { UploadFileComponent } from './modals/upload-file/upload-file.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    // Import angular material
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [NgxFileManagerComponent, SearchPipe, UploadFileComponent],
  exports: [NgxFileManagerComponent],
  entryComponents: [UploadFileComponent]
})
export class NgxFileManagerModule { }
