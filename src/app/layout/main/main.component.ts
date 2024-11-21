import { Component } from '@angular/core';
import { SearchComponent } from "../../components/search/search.component";
import { CategoriesComponent } from "../../components/categories/categories.component";
import { ResultsComponent } from "../../components/results/results.component";
import { DatahandlerService } from '../../services/datahandler.service';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SearchComponent, CategoriesComponent, ResultsComponent, HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  filters:Set<string> = new Set();

  constructor(private service:DatahandlerService) {
    this.service.filter$.subscribe((response)=>{
      this.filters = new Set(response);
    })
  }

  removeFilter(string:string) {
    let clonedSet = new Set(this.filters);
    clonedSet.delete(string);
    this.service.setfilter = clonedSet;
  }

  clearFilters() {
    this.service.setfilter = new Set();
  }
}
