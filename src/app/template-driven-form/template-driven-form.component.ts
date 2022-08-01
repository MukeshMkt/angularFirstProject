import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  constructor() {}
  model: { name: string; email: string; phoneNo: string } = {
    name: '',
    email: '',
    phoneNo: '',
  };

  onSubmit(): void {
    console.log('data', this.model);
  }
  ngOnInit(): void {}
}
