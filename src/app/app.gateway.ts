import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import {Server, Socket} from 'socket.io'
@WebSocketGateway()
export class AppGateway {
  @WebSocketServer()
  server: Server;
  private activeConnections = 0;
  handleConnection(client: Socket): void {
    this.activeConnections++;
    console.log(`client conected ${client.id}. conexiones activas: ${this.activeConnections}`);
    this.server.emit('conections', this.activeConnections);
  }

  handleDisconnect(client: Socket): void{
    this.activeConnections--;
    console.log(`cliente desconectado ${client.id} conexiones activas: ${this.activeConnections}`);
    this.server.emit(`conexiones: `,this.activeConnections);
  }
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    console.log('received messaage', message);
    this.server.emit('message', message);
  }
}
