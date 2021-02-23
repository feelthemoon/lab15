import { Pipe, PipeTransform } from '@angular/core';
import { MyWorker } from '../worker.model';

@Pipe({
  name: 'filterBySurname'
})
export class FilterBySurnamePipe implements PipeTransform {

  transform(workers: MyWorker[], searchWorker:string): any[] {
    if(searchWorker == ''){
      return workers;
    }else{
      const filterWorkers = workers?.filter(worker=>worker.surname?.toLowerCase().indexOf(searchWorker?.toLowerCase())!==-1)
      return filterWorkers;
    }
  }

}
