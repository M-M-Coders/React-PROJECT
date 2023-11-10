// ScholarshipForm.js

import React, { useState } from 'react';

const ScholarshipForm = ({ scholarship, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    educationLevel: '',
    major: '',
    graduationDate: '',
    GPA: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, scholarship);
  };

  return (
    <div className="form-container">
      <h2>Apply for {scholarship.name}</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Highest Education Level:
          <input
            type="text"
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Major:
          <input
            type="text"
            name="major"
            value={formData.major}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Graduation Date:
          <input
            type="date"
            name="graduationDate"
            value={formData.graduationDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          GPA:
          <input
            type="text"
            name="GPA"
            value={formData.GPA}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Additional Info:
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ScholarshipForm;
