import { Component, OnInit } from '@angular/core';
import { formInput } from '../../interface/reactiveForm';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  model: formInput = {
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
