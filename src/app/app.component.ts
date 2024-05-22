import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebSocketFront';
  stock: any = {};

  private webSocket: WebSocket;

  constructor() {
    this.webSocket = new WebSocket('ws://localhost:8054/stocks');
    this.webSocket.onmessage = (event) => {
      this.stock = JSON.parse(event.data)
    };
  }
}
