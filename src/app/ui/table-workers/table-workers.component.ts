import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  updatedWorker: MyWorker = {name: null, surname: null, type: 0};

  constructor() {}

  ngOnInit(): void {}

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }
  onEditWorker(worker: MyWorker) {
    this.editId = worker.id;
    this.updatedWorker = {...worker};
  }
  onUpdateWorker(){
    this.editId = null;
    this.updateWorker.emit(this.updatedWorker);
    this.updatedWorker = {name: null, surname: null, type: 0};
  }
}
