const productRepo = require('../repos/productRepo');
const Logger = require('bunyan');

const getAll = async (req, res) => {
  try {
    const search = req.query.search;
    const sort = req.query.sort;
    const dir = req.query.dir;
    const page = +req.params.page || 1; // page
    const pageSize = +req.params.size || 10; // how many  content we want to see on a webpage it may 1, 2 , 5 or 10 #any
    const products = await productRepo.get(page, pageSize, sort, dir, search);
    Logger.info("Get All Products Request Made");
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internl Server Error');
  }
};

const addProduct = async (req, res) => {
  try {
    const data = req.body;
    await productRepo.create(data);
    res.status(201).send('Product Added!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internl Server Error');
  }
};

const singleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productRepo.getById(id);
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const fullUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await productRepo.put(id, data);
    res.status(204);
    res.send('Updated!');
  } catch (err) {
    res.status(500);
    res.send('Internal server Error!');
  }
};

const partialUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await productRepo.put(id, data);
    res.status(204);
    res.send('Updated!');
  } catch (err) {
    res.status(500);
    res.send('Internal server Error!');
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await productRepo.remove(id);
    res.status(204);
    res.send('Deleted!');
  } catch (err) {
    res.status(500);
    res.send('Internal server Error!');
  }
};

module.exports = {
  getAll,
  addProduct,
  singleProduct,
  fullUpdate,
  partialUpdate,
  deleteProduct,
};
