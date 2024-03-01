import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OcrComponent } from './ocr/ocr.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OcrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ocr-app';
}
