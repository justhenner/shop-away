// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const seedCategories = require('../seeds/category-seeds');

// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: 'product_id',
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
})
// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  foreignKey: 'product_id',
})
// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Produce, {
  foreignKey: 'tag_id',
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
