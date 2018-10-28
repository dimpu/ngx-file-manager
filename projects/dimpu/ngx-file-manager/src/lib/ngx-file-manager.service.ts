import { Injectable } from '@angular/core';
import { FileElement } from './file-element.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest   } from '@angular/common/http';
interface IApiConfig {
  baseUrl: string;
  listUrl: string;
  uploadUrl: string;
}


@Injectable({
  providedIn: 'root'
})
export class NgxFileManagerService {
  apiConfig: any;

  constructor(private _http: HttpClient) {}

  setApiConfig(apiConfig) {
    this.apiConfig = apiConfig;
  }

  getFilesList(): Observable<FileElement[]> {
    return this._http.get < FileElement[]>(this.apiConfig.baseUrl + this.apiConfig.listUrl);
  }

  uploadFile(fileToUpload): Observable<any> {
    const url = this.apiConfig.baseUrl + this.apiConfig.uploadUrl;
    const formData: FormData = new FormData();
    formData.append('pic', fileToUpload, fileToUpload.name);
    const req = new HttpRequest('POST', url , formData, {
      reportProgress: true
    });
    return this._http.request(req);
  }
}
