import {Component, TemplateRef, ViewChild, inject} from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetConfig,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [MatBottomSheetModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.css'
})
export class BottomSheetComponent {
  readonly bottomSheet = inject(MatBottomSheet);

  @ViewChild(TemplateRef) template!: TemplateRef<any>;

  open(config?: MatBottomSheetConfig) {
    return this.bottomSheet.open(this.template, config);
  }
}
