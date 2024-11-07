import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteModule } from '../autocomplete/autocomplete.module';
import { BadgeModule } from '../badge/badge.module';
import { BottomSheetModule } from '../bottom-sheet/bottom-sheet.module';
import { ButtonModule } from '../button/button.module';
import { ButtomSheetModule } from '../buttom-sheet/buttom-sheet.module';
import { CardModule } from '../card/card.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { ChipsModule } from '../chips/chips.module';
import { CoreModule } from '../core/core.module';
import { DatepickerModule } from '../datepicker/datepicker.module';
import { DialogModule } from '../dialog/dialog.module';
import { DividerModule } from '../divider/divider.module';
import { ExpansionPanelModule } from '../expansion-panel/expansion-panel.module';
import { FormfieldModule } from '../formfield/formfield.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AutocompleteModule,
    BadgeModule,
    BottomSheetModule,
    ButtonModule,
    ButtomSheetModule,
    CardModule,
    CheckboxModule,
    ChipsModule,
    CoreModule,
    DatepickerModule,
    DialogModule,
    DividerModule,
    ExpansionPanelModule,
    FormfieldModule,
  ]
})
export class AppModule { }
