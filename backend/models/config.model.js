const mongoose = require('mongoose');

const ConfigSchema = new mongoose.Schema({
  page2Components: {
    type: [String], // e.g., ['aboutMe', 'birthdate']
    required: true,
  },
  page3Components: {
    type: [String], // e.g., ['address']
    required: true,
  },
}, { timestamps: true });

const Config = mongoose.model('Config', ConfigSchema);
export default Config;
