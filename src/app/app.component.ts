import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CV-generator';

  saveCV(): void {
    html2pdf().from(document.getElementById('canvas') as HTMLElement).save()
  }
}
