import express from 'express';
import data from 'api/models/test';

const router = express.Router();

const index = ({ res }) => {
  res.json(data);
};

const show = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!id) {
    return res.status(400).json({ error: 'Incorrect id' });
  }

  const result = data.filter(item => item.id === id);

  return res.json(result);
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!id) {
    return res.status(400).json({ error: 'Incorrect id' });
  }

  const result = data.filter(item => item.id !== id);

  return res.json(result);
};

const create = (req, res) => {
  const name = req.body.name || '';
  res.status(201).send({ result: name });
};

const update = (req, res) => {
  const name = req.body.name || '';
  res.send({ result: name });
};

router.get('/', index);
router.get('/:id', show);
router.delete('/:id', destroy);
router.post('/', create);
router.put('/:id', update);

export default router;
