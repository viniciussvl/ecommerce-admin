import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './components/toast/toast.component';
import { AlertComponent } from './components/alert/alert.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    ToastComponent,
    AlertComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class SharedModule {}