import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss']
})
export class ExampleDialogComponent implements OnInit {
  apiConfig: any = {
    baseUrl: 'http://localhost:3100/api/',
    listUrl: 'list',
    uploadUrl: 'upload'
  };
  constructor() { }

  ngOnInit() {
  }

}
