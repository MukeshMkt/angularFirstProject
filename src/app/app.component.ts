import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Mukesh Kr Thakur';
  data = 20;
  onclick() {
    this.data = 30;
  }
  updateData(item: string) {
    this.title = item;
  }
}
