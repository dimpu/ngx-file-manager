import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFileManagerModule } from '@dimpu/ngx-file-manager';
import { MatDialogModule, MatButtonModule, MatDividerModule } from '@angular/material';
import { ExampleDialogComponent } from './modals/example-dialog/example-dialog.component';
import { environment } from '../environments/environment';
import { InMemDataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    NgxFileManagerModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemDataService)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ExampleDialogComponent]
})
export class AppModule { }
