import { Injectable } from '@angular/core';
import data from './data';
import { Observable, BehaviorSubject } from 'rxjs';

export type Datum = {
  pk: number;
  name: string;
  points: number;
  display_img_url: string;
  quantity: number;
  valid_until: string;
  low_quantity: number;
  type?:'e-voucher' | 'products' | 'evergreen' | 'fashion & retail';
};

@Injectable({
  providedIn: 'root',
})
export class DatahandlerService {
  private dataSubject:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  data$:Observable<any> = this.dataSubject.asObservable();

  search:string = ``;
  filter: Set<string> = new Set();

  private filterSubject:BehaviorSubject<Set<string>> = new BehaviorSubject<Set<string>>(new Set());
  filter$:Observable<any> = this.filterSubject.asObservable();

  constructor() {
    this.dataSubject.next([...data]);
  }


  /**Method to set search */
  set setsearch(string:string) {
    this.search = string;
    this.updateData();
  }

  /**Method to set filter */
  set setfilter(set:Set<string>) {
    this.filterSubject.next(set);
    this.updateData();
  }

  /** */
  updateData() {
    const result:Datum[] = [];

    for(let datum of [...data]) {
      if(datum.name.includes(this.search)) {
        //if filter is applied
        if(this.filterSubject.value.size > 0) {
          if(this.filterSubject.value.has(datum.type as string)) {
            result.push(datum);
          }
        }
        else {
          result.push(datum);
        }
      }
    }

    this.dataSubject.next(result);
  }



}
