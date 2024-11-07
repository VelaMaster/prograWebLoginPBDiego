import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-radiobutton',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './radiobutton.component.html',
  styleUrl: './radiobutton.component.css'
})
export class RadiobuttonComponent {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
