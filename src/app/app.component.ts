import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  locationFeature: string = 'recipe';

  onNavigate(feature: string) {
    this.locationFeature = feature;
  }
}
