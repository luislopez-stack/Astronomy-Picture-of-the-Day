import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatCardModule
} from '@angular/material';
import { MaterialButtonComponent } from './material-button/material-button.component';
import { MaterialInputComponent } from './material-input/material-input.component';
import { MaterialListComponent } from './material-list/material-list.component';



@NgModule({
  declarations: [MaterialDemoComponent, MaterialButtonComponent, MaterialInputComponent, MaterialListComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatCardModule
  ]
})
export class MaterialModule { }
