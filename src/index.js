import dotenv from 'dotenv';
import api from 'api';

// load enviroments
dotenv.config();

const port = process.env.SERVER_PORT || 4500;

(() => {
  console.log('Hello Starter!');
  api(port);
})();
