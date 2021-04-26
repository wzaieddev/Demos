import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstraptest';
  currentSection = 'home';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

}
