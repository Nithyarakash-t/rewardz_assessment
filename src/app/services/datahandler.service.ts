import { Injectable } from '@angular/core';
import data from './data';

export type Datum = {
  pk: number;
  name: string;
  points: number;
  display_img_url: string;
  quantity: number;
  valid_until: string;
  low_quantity: number;
};

@Injectable({
  providedIn: 'root',
})
export class DatahandlerService {
  arrayData:Datum[] = [...data];
  displayData:Datum[] = [];

  search:string = ``;
  filter: Set<string> = new Set();

  constructor() {
    this.displayData = [...this.arrayData];
  }

  get arrayDataGetter() {
    return [...this.displayData];
  }

}
