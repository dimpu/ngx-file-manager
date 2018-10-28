import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFileManagerModule } from '@dimpu/ngx-file-manager';
import { MatDialogModule, MatButtonModule, MatDividerModule } from '@angular/material';
import { ExampleDialogComponent } from './modals/example-dialog/example-dialog.component';

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
    NgxFileManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ExampleDialogComponent]
})
export class AppModule { }
