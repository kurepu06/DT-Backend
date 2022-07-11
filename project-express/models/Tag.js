const mongoose = require('mongoose');


const TagSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true
  },
  dogId: {
    type: String,
    required: true
  }
});


const Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;