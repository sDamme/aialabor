import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatDividerModule, MatCardModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class AppMaterialModule { }