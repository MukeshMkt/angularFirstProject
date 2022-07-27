import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  add() {
    this.result = this.data1 + this.data2;
    this.updateData.emit(this.result);
    return this.result;
  }
  mul() {
    this.result = this.data1 * this.data2;
    this.updateData.emit(this.result);
    return this.result;
  }
  div() {
    this.result = this.data1 / this.data2;
    this.updateData.emit(this.result);
    return this.result;
  }
  sub() {
    this.result = this.data1 - this.data2;
    this.updateData.emit(this.result);
    return this.result;
  }
  ngOnInit(): void {
    console.log('item', this.item);
  }
  changed(value: string) {
    if (value == 'add') {
      this.add();
    }
    if (value == 'sub') {
      this.sub();
    }
    if (value == 'mul') {
      this.mul();
    }
    if (value == 'div') {
      this.div();
    }
  }
}
