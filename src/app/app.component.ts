import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {}
  updateData(item: number): void {
    this.data = item;
  }
  reactiveFormDataFunc(reactiveFormData: any): void {
    this.reactiveFormData = reactiveFormData;
  }
  onClick(event: any): void {
    this.router.navigate(['/reactive-form']);
  }
}
