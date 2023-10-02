const productModel = require('../model/productModel');

const get = (page, pageSize, sort, dir, search) => {
  let filter = {};

  if (search) {
    filter = {
      $or: [
        { brand: { $regex: search, $options: 'i' } },
        { model: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } },
      ],
    };
  }

  return productModel
    .find(filter, { __v: 0, _id: 0 })
    .sort({ [sort]: dir }) //if we write sort directly it will search for the key at the data i.e why we have to write it on a dynamic value
    .skip((page - 1) * pageSize)
    .limit(pageSize);
};

const create = (data) => {
  const product = new productModel(data);
  return product.save();
};

const getById = (id) => {
  const product = productModel.find({ _id: id });
  return product;
};

const put = (id, data) => {
  return productModel.findOneAndUpdate(
    { _id: id },
    {
      brand: data.brand,
      model: data.model,
      price: data.price,
      category: data.category,
      inStock: data.inStock,
    }
  );
};

const patch = (id, data) => {
  return productModel.findOneAndUpdate({ _id: id }, data);
};

const remove = (id) => {
  return productModel.findOneAndDelete({ _id: id });
};

module.exports = {
  get,
  create,
  getById,
  put,
  patch,
  remove,
};
