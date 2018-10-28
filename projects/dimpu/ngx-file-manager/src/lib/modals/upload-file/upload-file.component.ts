import { Component, OnInit, ElementRef } from '@angular/core';
import { NgxFileManagerService } from '../../ngx-file-manager.service';
import { MatDialogRef } from '@angular/material';
import { FileElement } from '../../file-element.interface';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'lib-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  uploading = false;
  uploadProgress = 0;

  constructor(private dialogRef: MatDialogRef<UploadFileComponent>, private _fileManagerService: NgxFileManagerService) { }
  ngOnInit() {}


  onChange(files: FileList) {
    const fileToUpload = files.item(0);
    this._fileManagerService.uploadFile(fileToUpload).subscribe((event) => {
      if (event.type === HttpEventType.UploadProgress) {
        this.uploading = true;
        console.log(event);
        this.uploadProgress = Math.floor((event.loaded / event.total) * 100);
        console.log(this.uploadProgress);
        // this.uploading = false;
      }
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
        this.dialogRef.close(event.body);
      }

    });
  }
}
