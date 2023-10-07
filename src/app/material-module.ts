import {NgModule} from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {
  MatSlideToggleModule,
  _MatSlideToggleRequiredValidatorModule,
} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  exports: [
    MatGridListModule,
    MatDialogModule, 
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule
  ],
  
})
export class DemoMaterialModule {}

