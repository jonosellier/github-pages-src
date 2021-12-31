import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.scss'],
})
export class WritingComponent implements OnInit {
  articles = [
    {
      title: 'Things you might not know about Windows Terminal',
      slug: 'win-term',
      posted: 'December 20, 2021',
    },
    {
      title: '4 Must-Have Tools for Developing on Windows',
      slug: 'must-have-productivity-tools',
      posted: 'September 22, 2020',
    },
    {
      title: 'Finding the Happiest Communities on Reddit',
      slug: 'happiest-communities-reddit',
      posted: 'December 8, 2019',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
