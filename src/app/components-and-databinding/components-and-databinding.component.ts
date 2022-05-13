import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-and-databinding',
  templateUrl: './components-and-databinding.component.html',
  styleUrls: ['./components-and-databinding.component.css'],
})
export class ComponentsAndDatabindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  serverElements = [
    {
      type: 'server',
      name: 'Test Server',
      content: 'This is a test server',
    },
  ];
}
