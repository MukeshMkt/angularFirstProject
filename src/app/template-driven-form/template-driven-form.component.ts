import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  model: { name: string; email: string; phoneNo: string } = {
    name: '',
    email: '',
    phoneNo: '',
  };

  constructor() {}
  ngOnInit(): void {}
  onSubmit(): void {
    console.log('data', this.model);
  }
}
