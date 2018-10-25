import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'lib-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  uploading = false;
  constructor() { }
  ngOnInit() {}


  onChange($event) {
    this.uploading = true;
    console.log($event);
  }
}
