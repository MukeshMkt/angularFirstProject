import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  constructor() {}
  @Input() item!: number;
  @Input() data1!: number;
  @Input() data2!: number;
  @Input() value!: string;
  @Output() updateData = new EventEmitter<number>();
  result!: number;
  add(): number {
    this.result = this.data1 + this.data2;
    this.updateData.emit(this.result);
    return this.result;
  }
  multiply(): number {
    this.result = this.data1 * this.data2;
    this.updateData.emit(this.result);
    return this.result;
  }
  divide(): number {
    this.result = this.data1 / this.data2;
    this.updateData.emit(this.result);
    return this.result;
  }
  subtract(): number {
    this.result = this.data1 - this.data2;
    this.updateData.emit(this.result);
    return this.result;
  }
  ngOnInit(): void {
    console.log('item', this.item);
  }
  changed(value: string): string {
    if (value == 'add') {
      this.add();
    }
    if (value == 'subtract') {
      this.subtract();
    }
    if (value == 'multiply') {
      this.multiply();
    }
    if (value == 'divide') {
      this.divide();
    }
    return (this.value = value);
  }
  ngOnChanges(changedValue: SimpleChanges) {
    if (changedValue['data1']) {
      this.data1 = changedValue['data1'].currentValue;
    }
    if (changedValue['data2']) {
      this.data2 = changedValue['data2'].currentValue;
    }
  }
  onClick(): number {
    if (
      (this.data1 < 0 && this.data2 < 0) ||
      this.data1 < 0 ||
      this.data2 < 0
    ) {
      this.result = this.data1 / this.data2;
      this.updateData.emit(this.result);
    }
    if (this.data1 > 0 && this.data2 > 0) {
      this.result = this.data1 * this.data2;
      this.updateData.emit(this.result);
    }
    return this.result;
  }
}
