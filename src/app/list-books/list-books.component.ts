import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
 books=[
  {id:1,titre:'the slight edge',auteur:'jeff olson',prix:23.00},
  {id:2,titre:'atomic habits',auteur:'james clear',prix:18.00},
  {id:3,titre:'so good they can\'t ignore you',auteur:'cal newport',prix:18.70}
]
  constructor() { }

  ngOnInit(): void {
  }

}
