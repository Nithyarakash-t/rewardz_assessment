import { Component } from '@angular/core';
import { DatahandlerService } from '../../services/datahandler.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  filters:Set<string> = new Set();

  constructor(private service:DatahandlerService) {
    this.service.filter$.subscribe((response)=>{
      this.filters = new Set(response);
    })
  }

  handleCheckbox(event:Event) {
    let clonedSet = new Set(this.filters);

    let cb = (event?.currentTarget as HTMLInputElement);

    if(cb.checked) clonedSet.add(cb.value);
    else clonedSet.delete(cb.value);

    this.service.setfilter = clonedSet;
  }

}
