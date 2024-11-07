import {Component} from '@angular/core';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-progressspinner',
  standalone: true,
  imports: [MatCardModule, MatRadioModule, FormsModule, MatSliderModule, MatProgressSpinnerModule],
  templateUrl: './progressspinner.component.html',
  styleUrl: './progressspinner.component.css'
})
export class ProgressspinnerComponent {
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}
