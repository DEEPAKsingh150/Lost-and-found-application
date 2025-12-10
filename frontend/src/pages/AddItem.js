import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddItem.css';

const AddItem = ({ user }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    status: 'lost',
    location: '',
    date: '',
    contactInfo: '',
    imageUrl: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { title, description, category, status, location, date, contactInfo, imageUrl } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token
        }
      };

      await axios.post('/api/items', formData, config);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add item. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="add-item-page">
      <div className="container">
        <div className="add-item-container">
          <h2>Add Lost/Found Item</h2>
          <p className="page-subtitle">Help others by reporting a lost or found item</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="add-item-form">
            <div className="form-row">
              <div className="form-group">
                <label>Item Title *</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Black iPhone 13"
                />
              </div>

              <div className="form-group">
                <label>Category *</label>
                <select name="category" value={category} onChange={handleChange} required>
                  <option value="">Select Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Documents">Documents</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Keys">Keys</option>
                  <option value="Bags">Bags</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Description *</label>
              <textarea
                name="description"
                value={description}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Provide detailed description of the item..."
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Status *</label>
                <select name="status" value={status} onChange={handleChange} required>
                  <option value="lost">Lost</option>
                  <option value="found">Found</option>
                </select>
              </div>

              <div className="form-group">
                <label>Date *</label>
                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Location *</label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={handleChange}
                required
                placeholder="e.g., Central Park, near the fountain"
              />
            </div>

            <div className="form-group">
              <label>Contact Information *</label>
              <input
                type="text"
                name="contactInfo"
                value={contactInfo}
                onChange={handleChange}
                required
                placeholder="Email or phone number"
              />
            </div>

            <div className="form-group">
              <label>Image URL (Optional)</label>
              <input
                type="url"
                name="imageUrl"
                value={imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Adding Item...' : 'Add Item'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;