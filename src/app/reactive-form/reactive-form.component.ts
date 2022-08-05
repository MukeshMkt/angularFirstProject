import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}
  @Output() reactiveFormDataFunc = new EventEmitter<any>();

  ngOnInit() {}
  registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    ],
    phoneNo: [
      '',
      [
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
      ],
    ],
  });
  data: any;
  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    sessionStorage.setItem(
      'loginData',
      JSON.stringify(this.registerForm.value)
    );
    this.data = sessionStorage.getItem('loginData');
    this.reactiveFormDataFunc.emit(this.registerForm.value);
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
    this.reactiveFormDataFunc.emit('');
  }
  onLogout(): void {
    this.data = null;
    sessionStorage.clear();
  }
}
