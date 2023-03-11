// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const seedCategories = require('../seeds/category-seeds');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
})

// Category.hasMany(Product, {
//   through: [FILL THIS IN AND COMMENT OUT 13-15]
//   foreignKey: 'category_id',
// });


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag, })
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag, })

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
