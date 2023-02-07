const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

  // find all tags
  // be sure to include its associated Product data
  router.get('/', async (req, res) => {
    try {
      const TagData = await Tag.findAll({
        include: [{ model: Product}],
      });
      res.status(200).json(TagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  // find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const TagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!TagData) {
      res.status(404).json({ message:'Tag not found!'});
    return;
    }
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});


  // update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagUpdate = await Tag.update(req.body , {
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(tagUpdate);
  } catch (err) {
    res.status(400).json(err);
  }
});


  // delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  const tagDelete = await Tag.destroy ({
    where: {
      id: req.params.id,
    }
  });
  res.status(200).json(tagDelete);
});

module.exports = router;
