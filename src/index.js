import '@babel/polyfill';
import dotenv from 'dotenv';
import api from 'api';

// load enviroments
dotenv.config();

const port = process.env.SERVER_PORT || 4500;
const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  console.log('Hello Starter!');
  api(port);

  await timeout(1000);
  console.log('Async/Await!');
})();
