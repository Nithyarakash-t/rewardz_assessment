import { Component } from '@angular/core';
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
    this.data = [...this.dataservice.arrayDataGetter];
  }

  /**Flyout methods */
  openFlyout() {
    document.body.style.setProperty('overflow', 'hidden');
    this.isFlyoutOpen = true;
  }

  closeFlyout() {
    document.body.style.removeProperty('overflow');
    this.isFlyoutOpen = false;
  }
}
