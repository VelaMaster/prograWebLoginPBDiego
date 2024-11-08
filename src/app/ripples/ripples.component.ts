import {Component} from '@angular/core';
import {MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-ripples',
  standalone: true,
  imports: [MatCheckboxModule, FormsModule, MatFormFieldModule, MatInputModule, MatRippleModule],
  templateUrl: './ripples.component.html',
  styleUrl: './ripples.component.css'
})
export class RipplesComponent {
  centered = false;
  disabled = false;
  unbounded = false;

  radius!: number;
  color!: string;
}
