import { Component } from '@angular/core';
import { DatahandlerService } from '../../services/datahandler.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  constructor(private service:DatahandlerService) {

  }

  handleInput(event:Event) {
    let value = (event.currentTarget as HTMLInputElement).value;
    this.service.setsearch = value;
  }
}
