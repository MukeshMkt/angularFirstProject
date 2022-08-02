import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Mukesh Kr Thakur';
  reactiveFormData: any = '';
  data!: number;
  data1!: number;
  data2!: number;

  updateData(item: number): void {
    this.data = item;
  }
  reactiveFormDataFunc(reactiveFormData: any): void {
    this.reactiveFormData = reactiveFormData;
  }
}
