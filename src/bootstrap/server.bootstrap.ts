import { Application } from 'express';
import { ServerAbstract } from '@bootstrap/server.abstract';

// export class ServerBootstrap implements IServerBootstrap {
export class ServerBootstrap extends ServerAbstract {
  // private app: Application;

  // constructor(app: Application) {
  //   this.app = app;
  // }

  constructor(private app: Application) {
    super();
  }

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
