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

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
}
