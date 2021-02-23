import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css'],
})
export class TableWorkersComponent implements OnInit {
  @Input() title: string;
  @Input() workers: MyWorker[]

  @Output() deleteWorker = new EventEmitter<number>();
  @Output() updateWorker = new EventEmitter<object>();

  editId: number | null;
  myWorkerType = MyWorkerType;
  public mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  editFormGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.editFormGroup = new FormGroup({
      id: new FormControl(null),
      name:new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      phone:new FormControl(null, [Validators.required]),
      type: new FormControl(0, [Validators.required])
    })
  }

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }
  onEditWorker(worker:MyWorker) {
    this.editId = worker.id;
    this.editFormGroup.patchValue(worker);
  }
  onUpdateWorker(){
    this.updateWorker.emit(this.editFormGroup.value);
    this.editId = null;
  }
}
