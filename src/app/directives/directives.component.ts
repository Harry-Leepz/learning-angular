import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  buttonClicked = false;
  randomStatement = 'Button has not been clicked';

  serverStatus = '';
  servers = ['Server 1', 'Server 2', 'Server 3', 'Server 4', 'Server 5'];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {}

  onButtonClick() {
    this.buttonClicked = true;
    this.randomStatement = 'Woop! Woop! Button has been Clicked successfully';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
