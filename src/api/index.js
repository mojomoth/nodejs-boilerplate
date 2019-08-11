import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import test from 'api/controllers/test';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/test', test);

const www = port => {
  app.listen(port, () => {
    console.log(`App Listening on port ${port}`);
  });
};

export default www;
