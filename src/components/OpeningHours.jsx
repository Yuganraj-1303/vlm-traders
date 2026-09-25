import React from 'react';
import { shop } from '../data/shop';

const OpeningHours = () => {
  const days = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' }
  ];

  return (
    <div 
      className="card opening-hours-card h-100"
      style={{
        backgroundColor: 'var(--bg-white)',
        borderColor: 'var(--border-light)',
        boxShadow: 'var(--shadow-soft)'
      }}
    >
      <div className="card-body p-3 p-xl-4 d-flex flex-column">
        <div className="d-flex align-items-center mb-3 mb-md-4">
          <i className="bi bi-clock-fill fs-4 me-3" style={{ color: 'var(--accent-orange)' }}></i>
          <h4 className="fw-bold mb-0 fs-5" style={{ color: 'var(--text-heading)' }}>Opening Hours</h4>
        </div>
        <ul className="list-unstyled mb-0 flex-grow-1 d-flex flex-column justify-content-between">
          {days.map((day, index) => (
            <li 
              key={day.key} 
              className={`d-flex justify-content-between align-items-center gap-2 py-1.5 ${index !== days.length - 1 ? 'border-bottom' : ''}`}
              style={{ borderColor: 'var(--border-light)' }}
            >
              <span className="fw-semibold small flex-shrink-0" style={{ color: 'var(--text-heading)' }}>{day.label}</span>
              <span className="small fw-medium text-end ms-auto flex-shrink-0" style={{ color: 'var(--text-primary)' }}>{shop.openingHours[day.key]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OpeningHours;
