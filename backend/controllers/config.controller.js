const Config = require('../models/config.model.js');

export const getConfig = async (req, res) => {
  const config = await Config.findOne().sort({ createdAt: -1 }).limit(1);
  res.json(config);
};

export const saveConfig = async (req, res) => {
  const { page2Components, page3Components } = req.body;

  if (!page2Components.length || !page3Components.length) {
    return res.status(400).json({ error: 'Each page must have at least one component' });
  }

  const config = await Config.create({ page2Components, page3Components });
  res.status(201).json(config);
};
