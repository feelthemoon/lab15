import { Pipe, PipeTransform } from '@angular/core';
import { MyWorker } from '../worker.model';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(workers: MyWorker[], searchWorker:string): any[] {
    if(searchWorker == ''){
      return workers;
    }else{
      const filterWorkers = workers?.filter(worker=>worker.name?.toLowerCase().indexOf(searchWorker?.toLowerCase())!==-1)
      return filterWorkers;
    }
  }

}
