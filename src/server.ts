import { app } from './app';
import { ServerBootstrap } from './bootstrap/server.bootstrap';

(async () => {
  try {
    const serverBootstrap = new ServerBootstrap(app);
    await serverBootstrap.initialize();
    console.log('Server is Running');
  } catch (err) {
    console.log(`${err}`);
  }
})();
