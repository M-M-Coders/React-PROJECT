// ScholarshipCard.js
import React from 'react';

function ScholarshipCard({ scholarship, onSelect }) {
  const { id, title, description, amount, image } = scholarship;

  return (
    <div className="card" onClick={onSelect}>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <h4>{description}</h4>
      <p>Amount Offered: ${amount}</p>
    </div>
  );
}

export default ScholarshipCard;
