import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteModule } from '../autocomplete/autocomplete.module';
import { BadgeModule } from '../badge/badge.module';
import { BottomSheetModule } from '../bottom-sheet/bottom-sheet.module';
import { ButtonModule } from '../button/button.module';
import { ButtomSheetModule } from '../buttom-sheet/buttom-sheet.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AutocompleteModule,
    BadgeModule,
    BottomSheetModule,
    ButtonModule,
    ButtomSheetModule,
  ]
})
export class AppModule { }
