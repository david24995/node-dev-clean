import { Application } from 'express';
import { IServerBootstrap } from './server.interface';

export class ServerBootstrap implements IServerBootstrap {
  // private app: Application;

  // constructor(app: Application) {
  //   this.app = app;
  // }

  constructor(private app: Application) {}

  initialize(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.app
        .listen(3000)
        .on('listening', () => {
          resolve(true);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }
}
