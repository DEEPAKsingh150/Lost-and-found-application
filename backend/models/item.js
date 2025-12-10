const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Electronics', 'Documents', 'Accessories', 'Clothing', 'Keys', 'Bags', 'Others']
  },
  status: {
    type: String,
    required: true,
    enum: ['lost', 'found'],
    default: 'lost'
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  contactInfo: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    default: ''
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  resolved: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Item', ItemSchema);