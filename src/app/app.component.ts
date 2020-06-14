import { Component, Injectable } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [];
  constructor(private wikiservice: WikipediaService) { }

  onTerm(term: string) {
    this.wikiservice.search(term).subscribe((pages ) => {
      this.pages = pages;
    });

  }
}
