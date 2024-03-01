import { Component } from '@angular/core';
import Tesseract from 'tesseract.js';

@Component({
  selector: 'app-ocr',
  standalone: true,
  imports: [],
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.css']
})
export class OcrComponent {
  extractedText: string = '';

  constructor() { }

  async performOCR(imageFile: File) {
    const result = await Tesseract.recognize(
      imageFile,
      'eng',
      { logger: m => console.log(m) }
    );
    this.extractedText = result.data.text;
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const imageFile = event.target.files[0];
      this.performOCR(imageFile);
    }
  }
}