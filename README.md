# NgxFileManager

# ngx-file-manager [![Build Status](https://travis-ci.org/dimpu/ngx-file-manager.svg?branch=develop)](https://travis-ci.org/dimpu/ngx-file-manager)
Angular (>=2) component for rich text editor Quill

# Example
[Demo Page](https://dimpu.github.io/ngx-file-manager/)


### Installation

``` bash
npm install @dimpu/ngx-file-manager --save
```

### Sample

Include NgxFileManagerModule in your main module:
``` typescript
import { NgxFileManagerModule } from '@dimpu/ngx-file-manager';

@NgModule({
  // ...
  imports: [
    NgxFileManagerModule
  ],
  // ...
})
export class AppModule {}
```

Then use it in your component:

``` html
<!-- ngx-file-manager -->
<ngx-file-manager 
  [apiConfig]="apiConfig" 
  (fileUploaded)="onFileUploaded($event)" 
  (fileSelected)="onFileSelected($event)"></ngx-file-manager>

```

``` javascript
import { Component } from '@angular/core';
import { FileElement } from '@dimpu/ngx-file-manager';

@Component({
  selector: 'sample',
  template: require('./sample.html')
})
export class Sample {
  public apiConfig: any = {
    baseUrl: 'http://localhost:3100/api/',
    listUrl: 'list',
    uploadUrl: 'upload'
  };
  
  onFileUploaded(file: FileElement) {
    console.log('uploaded file object', file);
  }

  fileSelected(file: FileElement) {
    console.log('selected file object', file);
  }
  
}
```


### API config

/api/list

```json
[{
  basename: "file.png"
  extension: ".png"
  isFolder: false
  name: "file"
  thumb: "//localhost:3100/uploads/file.png"
},
{
  basename: "file.png"
  extension: ".png"
  isFolder: false
  name: "file"
  thumb: "//localhost:3100/uploads/file.png"
}]
```

/api/upload

Request Method: POST

Form data
pic: (binary) 

Response

```json
{
  basename: "file.png"
  extension: ".png"
  isFolder: false
  name: "file"
  thumb: "//localhost:3100/uploads/file.png"
}
```

### Express server 
clone this repo

```shell
npm run server.start
````
