export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  type: number;
  phone: string;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, name: 'Иван', surname: 'Иванов', phone: "+7(913) 462-32-11", type: 0 },
  { id: 2, name: 'Петр', surname: 'Петров', phone: "+7(911) 463-31-12", type: 1 },
  { id: 3, name: 'Сидор', surname: 'Сидоров', phone: "+7(912) 464-30-13", type: 2 },
  { id: 4, name: 'Василий', surname: 'Васильев', phone: "+7(910) 461-33-14", type: 3 },
];
