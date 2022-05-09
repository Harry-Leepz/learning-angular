import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  randomComment: string = 'OMG Harry, we are finally learning Angular';
  name: string = 'Harry';
}
