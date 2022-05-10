import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  newServer = true;
  onClickStatus = 'Button has NOT been clicked!';
  serverName = '';
  serverCreationStatus = 'No server has been created';

  constructor() {
    setTimeout(() => {
      return (this.newServer = false);
    }, 3000);
  }

  ngOnInit(): void {}

  onClickStatusChanged() {
    this.onClickStatus = 'Button has been clicked!!';
  }

  setServerName() {
    this.serverCreationStatus =
      'A new server was created with the name ' + this.serverName;
  }

  updateServerName(event) {
    this.serverName = event.target.value;
  }
}
