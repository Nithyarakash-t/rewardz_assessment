import { Component, input } from '@angular/core';
import { DatahandlerService, Datum } from '../../services/datahandler.service';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [DatePipe, NgClass],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  data:Datum[] = [];
  isFlyoutOpen = false;

  constructor(private dataservice:DatahandlerService) {
    this.dataservice.data$.subscribe((response)=>{
      this.data = [...response]
    })
  }

  /**Flyout methods */
  openFlyout() {
    document.body.style.setProperty('overflow', 'hidden');
    this.isFlyoutOpen = true;
  }

  closeFlyout() {
    const control = document.querySelector('.c-results__sort') as HTMLButtonElement;
    control.focus();

    document.body.style.removeProperty('overflow');
    this.isFlyoutOpen = false;
  }

  handleSort() {
    let radio = document.querySelector('.c-radio input:checked') as HTMLInputElement;
    this.data.sort((a,b)=>{
      if(radio.value === 'ascending') {
        return a.name.localeCompare(b.name);
      }
      else {
        return b.name.localeCompare(a.name);
      }
    })

  }
}
