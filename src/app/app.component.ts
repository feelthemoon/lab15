import { Component, OnInit } from '@angular/core';
import { HttpService } from './shared/services/http.service';
import {
  MyWorker,
  MyWorkerType,
} from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Список сотрудников';
  searchName: string = "";
  searchSurname: string = "";
  workers: MyWorker[];
  myWorkerType = MyWorkerType;

  constructor(private http:HttpService) {}

  ngOnInit(): void{
    this.getData();
  }

  async getData(){
    try {
      this.workers = await this.http.getWorker();
      console.log(this.workers);

    } catch (error) {
      console.log(error);
    }
  }

  getByType(type: number) {
    return this.workers?.filter((worker) => worker.type === type);
  }

  async onDeleteById(id: number) {
    try {
      await this.http.deleteWorker(id)
    } catch (error) {
      console.log(error);
    }finally{
      this.getData();
    }
  }

  async onAddWorker(worker) {
    const id =
      this.workers.length > 0
        ? this.workers[this.workers.length - 1].id + 1
        : 0;
    worker.id = id;
    try {
      await this.http.postWorker(worker);
    } catch (error) {
      console.log(error)
    }finally{
      this.getData();
    }
  }

  async onUpdateWorker(updatedWorker: MyWorker){
    try {
      await this.http.editWorker(updatedWorker);
    } catch (error) {
      console.log(error)
    }finally{
      this.getData();
    }
  }
}
