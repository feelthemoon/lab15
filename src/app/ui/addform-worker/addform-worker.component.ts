import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  type = 0;
  addFromGroup: FormGroup;
  public mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {
    this.addFromGroup = new FormGroup({
      name:new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      phone:new FormControl(null, [Validators.required]),
      type: new FormControl(0, [Validators.required])
    })
  }

  onAddWorker() {
    this.addWorker.emit(this.addFromGroup.value);
  }
}
