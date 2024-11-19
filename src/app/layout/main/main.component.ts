import { Component } from '@angular/core';
import { SearchComponent } from "../../components/search/search.component";
import { CategoriesComponent } from "../../components/categories/categories.component";
import { ResultsComponent } from "../../components/results/results.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SearchComponent, CategoriesComponent, ResultsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
